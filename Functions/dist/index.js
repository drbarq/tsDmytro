"use strict";
// // Functions (optional and default parameters)
// function sum(a: number, b: number = 0): number {
//   return a + b;
// }
// sum(1);
// type MyFunc = (a: number, b: number) => number;
// const sum2: MyFunc = (a, b) => a + b;
// // Unknown number of arguments
// function sumEverything(
//   arg1: string,
//   arg2: boolean,
//   ...numbers: number[]
// ): number {
//   return numbers.reduce((result, num) => result + num, 0);
// }
// // Overloads
// function calcArea(width: number, height: number): number;
// function calcArea(length: number): number;
// function calcArea(...args: number[]): number {
//   if (args.length === 2) {
//     return args[0] * args[1];
//   }
//   return Math.pow(args[0], 2);
// }
class Robot {
    constructor(_name) {
        this._name = _name;
        // this.name = _name;
    }
    static isColorAvailable(color) {
        return Robot.avalibleColors.includes(color);
    }
    askName() {
        console.log(`My name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
    set color(color) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error(`Color ${color} is not available`);
        }
        this._color = color;
    }
    set name(value) {
        this._name = 'Prefix' + value;
    }
    get name() {
        return this._name + '_suffix';
    }
}
Robot.avalibleColors = ['green', 'yellow'];
class FlyingRobot extends Robot {
    constructor(name, jetPackSize) {
        super(name);
        this.jetPackSize = jetPackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const robot = new Robot('John');
robot.askName();
const flyingRobot = new FlyingRobot('Joe', 2);
flyingRobot.move(10);
console.log("Flying robot's jetpack size is", flyingRobot.name);
flyingRobot.name = 'Kevin';
console.log("Flying robot's jetpack size is", flyingRobot.name);
// console.log(`My name is ${flyingRobot.name}`);
Robot.isColorAvailable('green');
Robot.avalibleColors;
