// first way

export class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(this.name);
  }
}

function test3() {
  console.log(1234567);
}

// second way
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log(this.name);
//   }
// }

export { test3 };

// third way

export let something = "something as testing";
