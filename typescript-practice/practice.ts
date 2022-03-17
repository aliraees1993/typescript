// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let myAge: string = `My age is ${age}`;

// Array
let pets: string[] = ["cats", "dogs"];
let pets2: Array<string> = ["lion", "tiger"];

// object
let wizard: object = {
    a: "Ali",
};

// null & undefined
let undefinedType: undefined = undefined;
let nullType: null = null;

// tuple
let basket: [string, number] = ["basket", 5];

// enum
enum Size {
    Small = 1,
    Medium = 2,
}
let sizeName: string = Size[2];
let sizeNumber: number = Size.Small;

// any - Be careful using it
let whatever: any = "Whatever!";
whatever = basket;

// void - no return type
let sing = (): void => {
    console.log("LALALALA");
};

// never - for errors
let error = (): never => {
    throw Error("Error");
};

// interface - ? means its optional property
interface RobotArmy {
    count: number;
    type: string;
    magic?: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log("Fight");
};

let fightRobotArmy2 = (robots: {
    count: number;
    type: string;
    magic: string;
}) => {
    console.log("Fight");
};

// type assertion
interface CatArmy {
    count: number;
    type: string;
    magin: string;
}

let dog = {} as CatArmy;
dog.count;

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log("Fight");
};

let fightRobotArmy4 = (robots: RobotArmy): number => {
    console.log("Fight");
    return robots.count;
};

// Class
class Animal {
    private sing: string = "LALALAL";
    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string {
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal("RAWWWR");
console.log(lion.greet());

// Union
let confused: string | number | boolean = "Hello"; // It can be string or number or boolean
