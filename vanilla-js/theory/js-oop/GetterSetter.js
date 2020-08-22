// long story short - getter/setter should have one name
// and called as regular prop not lik
const obj = {
    objName: "Empty",

    get getObjName() {
        return this.objName;
    },
    regularMethods() {
        return this.objName;
    },
    set getObjName(objName) {
        this.objName = objName;
    }
}
console.log(obj.getObjName); // calls like regular prop without "()"
console.log(obj.regularMethods());
obj.getObjName="full";
console.log(obj.getObjName);
