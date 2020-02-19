// import multiply, { multiplyByTwo } from './multiply';
import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply';
// import * as multiplyModule from './multiply';

const a = 4;
const b = 5;

console.log(`${a} + ${b} = ${multiply(a, b)}`);
// console.log(`${a} + ${b} = ${multiplyModule.default(a, b)}`);
// multiplyModule.multiplyByTwo(2);
