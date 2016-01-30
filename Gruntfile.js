/*
 * tickets grunt configuration file
 */
function exports(grunt) {
	'use strict';

	//Load all available grunt tasks
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		/* grunt-ts task. Used to compile TypeScript files into JS

		Tasks are divided in 2. One is server side which targets ES6.
		The other is client side which targets ES5 for browser compatibility reasons.

		Each one is itself divided in 2.
		One only checks (no compilations with noEmit true) and the other one compiles but does not resolve externals.
		That is to avoid dependencies being also compiles as well.
		 */

		ts: {
			serverCheck: {
				tsconfig: './tsconfig.json',
				options: {
					"compiler": "./node_modules/typescript/bin/tsc",
					"noEmit": true
				}
			},
			server: {
				tsconfig: './tsconfig.json',
				options: {
					"compiler": "./node_modules/typescript/bin/tsc",
					"noResolve": true,
					"declaration": true,
					"failOnTypeErrors": false
				}
			},
			clientCheck: {
				tsconfig: './9js/modules/tickets/client/tsconfig.json',
				options: {
					"compiler": "./node_modules/typescript/bin/tsc",
					"noEmit": true
				}
			},
			client: {
				tsconfig: './9js/modules/tickets/client/tsconfig.json',
				options: {
					"compiler": "./node_modules/typescript/bin/tsc",
					"noResolve": true,
					"declaration": true,
					"failOnTypeErrors": false
				}
			}
		},
		/*
		TSD (TypeScript Definition) loads TypeScript definition files for most common javascript libraries
		so that they can be references in your code in a way that is more type strict.

		tsd task requires no configuration because it only checks for local tsd.json file
		 */
		tsd: {},

		/*

		 */
		stylus: {
			// Stylus files glob to cover all stylus files that need to be processed
			files: [
				'9js/modules/tickets/client/**/*.styl',
				'9js/modules/tickets/lib/dgrid/css/**',
				'!9js/modules/tickets/lib/d3/**',
				'!9js/modules/tickets/lib/dojo/**',
				'!node_modules/**'
			],
			options: {
				// use embedurl('test.png') in our code to trigger Data URI
				// usage of emberurl function triggers the resource to be converted to a data uri in your generated css
				urlfunc: 'embedurl',
				compress: true
			}
		},
		/*
		NineJS's Nineplate task compiles HTML templates into DOM rendering functions and also converts CSS files into a
		 javascript module that can be imported programmatically.

		 It has 2 tasks, one that compiles HTML and the other converts CSS into javascript modules.
		 */
		nineplate: {
			html: {
				mode: 'html',
				pattern: '\\.html$',
				src: [
					'9js/modules/tickets/client'
				]
			},
			css: {
				mode: 'css',
				pattern: '\\.css$',
				extension: 'ncss.js',
				sizeLimit: 100000,
				src: [
					'9js/modules/tickets/client',
					'9js/modules/tickets/lib/dgrid/css',
					'9js/modules/tickets/lib/alertify/build/css'
				]
			}
		},
		/*
		SCM (Source Control Manager) is a task defined locally in this grunt file.
		What is does is clone and reset from a remote source control repository into a specific commit (or origin/master by default)

		NineJS modules are already bundled by npm modules, that's why there is no need to specify them here.
		 */
		scm: {
			/*
			dgrid is a Grid control made by SitePen
			 */
			dgrid: {
				type: 'git',
				url: 'git://github.com/ninejs/dgrid.git',
				target: __dirname + '/9js/modules/tickets/lib/dgrid',
				branch: '0f67fa108b3952069ab36dd0cd0ad7fcbddf4a8e'
			},
			/*
			dstore is also from SitePen. It's a library that has data providers for dgrid. It's a dgrid dependency
			 */
			dstore: {
				type: 'git',
				url: 'git://github.com/sitepen/dstore.git',
				target: __dirname + '/9js/modules/tickets/lib/dstore',
				branch: '34b51c931b64d500afdcc52b9964b35dd91315fe' // origin/1.x branch
			},
			/*
			Dojo toolkit is also a dgrid dependency
			 */
			dojo: {
				type: 'git',
				url: 'git://github.com/dojo/dojo.git',
				target: __dirname + '/9js/modules/tickets/lib/dojo',
				branch: 'e9a9f51cca92e42b90ecf2e7850f1392b995f499'
			},
			/*
			Alertify is a library that allows you to display notifications and alerts
			 */
			alertify: {
				type: 'git',
				url: 'git://github.com/eburgos/AlertifyJS.git',
				target: __dirname + '/9js/modules/tickets/lib/alertify',
				branch: 'b80b2802c94048bac11f07f741c58623e915603e'
			},
			/*
			Bootstrap is a CSS grid system and some javascript componentes
			 */
			bootstrap: {
				type: 'git',
				url: 'git://github.com/twbs/bootstrap.git',
				target: __dirname + '/9js/modules/tickets/lib/bootstrap',
				branch: 'd533bf0cbc1f0c8c554a0023f2ae6086e3e93a42'
			},
			/*
			Reveal.js is an html based presentations framework. It is used to display the presentation that resides
			in the "presentation" folder
			 */
			revealjs: {
				type: 'git',
				url: 'git://github.com/hakimel/reveal.js.git',
				target: __dirname + '/presentation/reveal.js',
				branch: '8a40bb481e376539f7a307c0fffcf2da4e87cbeb'
			}
		}
	});

	var childProcess = require('child_process'),
		path = require('path');

	/*
	TSD task used to update definitions
	 */
	grunt.registerTask('tsd', 'Install TypeScript definitions', function () {
		var done = this.async(),
			command = 'node',
			cliPath = path.resolve(__dirname, 'node_modules', 'tsd', 'build', 'cli.js');

		var tsdProcess = childProcess.spawn(command, [cliPath, 'install'], {stdio: 'inherit'});
		tsdProcess.on('exit', function (code) {
			done(code);
		});
	});

	/*
	Nineplate task used to compile html templates and convert css files into javascript modules
	 */
	grunt.registerMultiTask('nineplate', 'Generates nineplate and css functions', function () {
		console.log('Running nineplate ');
		var done = this.async();
		var files = this.filesSrc;
		var pattern = '';
		var extension = '';
		var data = this.data;
		if (this.data.pattern) {
			pattern = ' --pattern=' + this.data.pattern;
		}
		if (this.data.extension) {
			extension = ' --extension=' + this.data.extension;
		}

		console.log('nineplate ' + files.length + ' files');

		files.forEach(function (file) {
			var cmdline = 'node ./node_modules/ninejs/bin/nineplate ' + file + ' --target=amd --toBase64 --sizeLimit=' + (data.sizeLimit || 50000) + ' --css --baseUrl=' + path.resolve(process.cwd(), '9js', 'modules', 'tickets') + pattern + extension;
			console.log(cmdline);
			childProcess.execSync(cmdline, {
				stdio: 'inherit'
			});
		});
		done();
	});

	/*
	Source Control task used for including external libraries
	 */
	grunt.registerMultiTask('scm', 'use source control repositories', function () {
		var hard = grunt.option('reset') === 'hard';

		function git(self, done) {
			var fs = require('fs');
			self.data.branch = self.data.branch || 'origin/master';

			function afterClone() {
				console.log('changing dir to ' + self.data.target);
				process.chdir(self.data.target);
				console.log(self.data.type + ' fetch');
				var childPull = childProcess.spawn(self.data.type, ['fetch'],
					{
						stdio: 'inherit'
					});
				childPull.on('exit', function () {
					var args = ['reset', self.data.branch];
					if (hard) {
						args.push('--hard');
					}
					console.log(self.data.type + args.join(' '));
					var childReset = childProcess.spawn(self.data.type, args,
						{
							stdio: 'inherit'
						});
					childReset.on('exit', function () {
						if (hard) {
							var childClean = childProcess.spawn(self.data.type, ['clean', '-f'], { stdio: 'inherit' });
							childClean.on('exit', function () {
								done();
							});
						}
						else {
							done();
						}
					});
				});
			}

			if (fs.existsSync(self.data.target)) {
				afterClone();
			}
			else {
				var args = [];
				args.push('clone');
				args.push(self.data.url);
				args.push(self.data.target);

				console.log(self.data.type + ' ' + args.join(' '));

				var child = childProcess.spawn(self.data.type, args,
					{
						stdio: 'inherit'
					});

				child.on('exit', afterClone);
			}

		}

		function hg(self, done) {
			var fs = require('fs');
			var childProcess = require('child_process');
			self.branch = self.branch || 'default';

			function afterClone() {
				var cwd = process.cwd();
				process.chdir(self.data.target);
				console.log(self.data.type + ' pull');
				var childPull = childProcess.spawn(self.data.type, ['pull'],
					{
						stdio: 'inherit'
					});
				childPull.on('exit', function () {
					var args = ['update'];
					if (hard) {
						args.push('-r');
					}
					args.push(self.branch);
					if (hard) {
						args.push('-C');
					}
					console.log(self.data.type + args.join(' '));
					var childUpdate = childProcess.spawn(self.data.type, args,
						{
							stdio: 'inherit'
						});
					childUpdate.on('exit', function () {
						process.chdir(cwd);
						done();
					});
				});
			}

			if (fs.existsSync(self.data.target)) {
				afterClone();
			}
			else {
				var args = [];
				args.push('clone');
				args.push(self.data.url);
				args.push(self.data.target);

				console.log(self.data.type + ' ' + args.join(' '));

				var child = childProcess.spawn(self.data.type, args,
					{
						stdio: 'inherit'
					});

				child.on('exit', afterClone);
			}

		}


		var done = this.async();

		var options = this.options(
			{
				type: 'git',
				url: null,
				target: null,
				branch: null
			});
		this.data.type = this.data.type || options.type;
		this.data.url = this.data.url || options.url;
		this.data.target = this.data.target || options.target;
		this.data.branch = this.data.branch || options.branch;

		var implementations =
		{
			git: git,
			hg: hg
		};
		var fn = function () {
			throw new Error('unsupported scm type');
		};
		if (implementations[this.data.type]) {
			fn = implementations[this.data.type];
		}

		grunt.log.subhead('Running ' + this.data.type + ' pull ' + this.target + '...');

		if (this.data.url) {
			if (this.data.target) {
				fn(this, done);
			}
			else {
				grunt.log.error('No scm target specified');
				done(false);
			}
		}
		else {
			grunt.log.error('No scm url specified');
			done(false);
		}
	});

	// Default task.
	grunt.registerTask('default', ['stylus', 'tsd', 'nineplate', 'ts']);

}

module.exports = exports;