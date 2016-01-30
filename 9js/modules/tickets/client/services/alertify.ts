/// <amd-dependency path="alertify/css/alertify.ncss" name="alertifyCss" />
/// <amd-dependency path="alertify/css/themes/bootstrap.ncss" name="alertifyTheme" />
/// <amd-dependency path="alertify/alertify" name="alertify" />
'use strict';

declare var alertify: any;
declare var alertifyCss: any;
declare var alertifyTheme: any;

[alertifyCss, alertifyTheme].forEach((item) => {
    item.enable();
});
function nullFunction () {
}

export function confirm (msg: string, accept: () => void, cancel?: () => void) {
    return alertify.confirm(msg, accept, cancel || nullFunction);
}

export function alert (title: string, msg: string, accept?: () => void) {
    return alertify.alert(title, msg, accept || nullFunction);
}

export function message (msg: string, accept?: () => void) {
    return alertify.message(msg, accept || nullFunction);
}