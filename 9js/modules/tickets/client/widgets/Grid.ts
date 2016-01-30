/// <amd-dependency path="dgrid/OnDemandGrid" name="Dgrid" />
/// <amd-dependency path="dstore/Memory" name="DstoreMemory" />
/// <amd-dependency path="dojo/_base/declare" name="declare" />
/// <amd-dependency path="dgrid/css/dgrid.ncss" name="dgridStyle" />
'use strict';

declare var Dgrid: any;
declare var dgridStyle: any;
declare var DstoreMemory: any;
declare var declare: any;

dgridStyle.enable();
export interface GridTypeConstructor {
	new (args: any): GridType;
}

export interface GridType {

}

export interface MemoryConstructor {
	new (args: any): MemoryInstance;
}

export interface MemoryInstance {
	setData(args: any[]): void;
}

export var Memory: MemoryConstructor = DstoreMemory;

let Grid: GridTypeConstructor = declare([Dgrid], {

});

export default Grid;