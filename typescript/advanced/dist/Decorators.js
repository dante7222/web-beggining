"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//class decorator
function Log(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.name = "hello";
        }
        logName() {
        }
    };
}
// property decorator
// target is class
function Log2(target, proName) {
    console.log(target);
    console.log(proName);
}
//for methods
function Log3(target, proName, descriptor) {
    console.log(target);
    console.log(proName);
    console.log(descriptor);
}
let Componentos = class Componentos {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log("Component name", this.name);
    }
};
Componentos = __decorate([
    Log
], Componentos);
let componentos = new Componentos("1");
console.log(componentos);
