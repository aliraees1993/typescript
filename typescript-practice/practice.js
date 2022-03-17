"use strict";
// boolean
let isCool = true;
// number
let age = 56;
// string
let eyeColor = "brown";
let myAge = `My age is ${age}`;
// Array
let pets = ["cats", "dogs"];
let pets2 = ["lion", "tiger"];
// object
let wizard = {
    a: "Ali",
};
// null & undefined
let undefinedType = undefined;
let nullType = null;
// tuple
let basket = ["basket", 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
})(Size || (Size = {}));
let sizeName = Size[2];
let sizeNumber = Size.Small;
// any - Be careful using it
let whatever = "Whatever!";
whatever = basket;
// void - no return type
let sing = () => {
    console.log("LALALALA");
};
// never - for errors
let error = () => {
    throw Error("Error");
};
let fightRobotArmy = (robots) => {
    console.log("Fight");
};
let fightRobotArmy2 = (robots) => {
    console.log("Fight");
};
let dog = {};
dog.count;
// Function
let fightRobotArmy3 = (robots) => {
    console.log("Fight");
};
let fightRobotArmy4 = (robots) => {
    console.log("Fight");
    return robots.count;
};
// Class
class Animal {
    constructor(sound) {
        this.sing = "LALALAL";
        this.sing = sound;
    }
    greet() {
        return `Hello ${this.sing}`;
    }
}
let lion = new Animal("RAWWWR");
console.log(lion.greet());
// Union
let confused = "Hello"; // It can be string or number or boolean
