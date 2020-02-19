"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import multiply, { multiplyByTwo } from './multiply';
var multiply_1 = __importDefault(require("./multiply"));
// import * as multiplyModule from './multiply';
var a = 4;
var b = 5;
console.log(a + " + " + b + " = " + multiply_1.default(a, b));
// console.log(`${a} + ${b} = ${multiplyModule.default(a, b)}`);
// multiplyModule.multiplyByTwo(2);
