function sum(a: number, b: number): number {
  return a + b;
}

type myFunc = (a: number, b: number) => number;
// by passing in myFunc, ts knows a,b are a number
const sum2: myFunc = (a: number, b) => a + b;
