var SomeEnum;
(function (SomeEnum) {
    SomeEnum[SomeEnum["Simple"] = 0] = "Simple";
    SomeEnum[SomeEnum["Standard"] = 1] = "Standard";
    SomeEnum[SomeEnum["Premium"] = 2] = "Premium";
})(SomeEnum || (SomeEnum = {}));
var premium = SomeEnum.Premium; // 2
var premium1 = SomeEnum[2]; // premium
console.log(premium1);
