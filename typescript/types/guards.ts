function strip(x: string | number): string | number {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    x.trim();
}

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {

}

setAlertType("success");
// setAlertType("sosi") compile error
