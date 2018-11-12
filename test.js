import { Person, test3, something as testing } from "./person.js";
// import * as imported from "./person.js";

// console.log(imported);

const person = {
  talk() {
    console.log("this", this);
  }
};

person.talk();

const person2 = {
  talk() {
    setTimeout(function() {
      console.log("this", this);
    }, 1000);
  }
};

person2.talk();

const person3 = {
  talk() {
    let self = this;
    setTimeout(function() {
      console.log("this", self);
    }, 1000);
  }
};

person3.talk();

const person4 = {
  talk() {
    // var self = this;
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

person4.talk();

// map

const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li>${color} + something added to map</li>`);
console.log(items);

// Object Desturucturing

const address = {
  street: "",
  city: "",
  country: ""
};

// const street = address.address;
// const city = address.city;
// const country = address.country;

const { street, city, country } = address;

// Spread Operator

const f = [1, 2, 3];
const s = [4, 5, 6];

// // const combined = f.concat(s);
// const combined = [...f, "a", ...s, "y"];
// console.log(combined);

// const clone = [...f];
// console.log(f);
// console.log(clone);

const first = { name: "milan" };
const second = { job: "mucenik koji ce da pobedi sve" };

const combined = { ...first, ...second, location: "serbia" };
console.log(combined);

// classess

const personClass = {
  name: "miki",
  walk() {
    console.log("kreni");
  }
};

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     console.log(this.name);
//   }
// }

class Person2 extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log(this.name + " is " + this.degree);
  }
}

// from hire
const osobaNova = new Person("djura");
osobaNova.walk();

const person22 = new Person2("miki", "BeD");
person22.teach();

//
test3();

//
console.log(testing);
