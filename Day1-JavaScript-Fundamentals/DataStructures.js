// Objects

const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();
