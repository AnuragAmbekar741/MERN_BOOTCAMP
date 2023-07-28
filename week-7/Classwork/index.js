"use strict";
function calculateSum(first, second) {
    return first + second;
}
// console.log(calculateSum(2,4))
//Function with 3 args 2-nums and type using which calculation will happen
function calculate(first, second, type) {
    if (type === 'add')
        return first + second;
    if (type === 'sub')
        return first - second;
    if (type === 'mul')
        return first * second;
    if (type === 'div')
        return first / second;
    return -1;
}
console.log(calculate(1, 3, 'add'));
class Person {
    constructor(name, age, genderProps) {
        this.name = name,
            this.age = age,
            this.genderProps = genderProps;
    }
    greet() {
        return "Hi Mr " + this.name;
    }
}
const Anurag = new Person('Anurag', 26, { gender: 'male', pronouns: 'he/him', orientation: 'straight' });
console.log(Anurag.greet());
class Square {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}
const Square1 = new Square(5, 5);
console.log("Area of square1 is ", Square1.area());
function greetMe(person) {
    return "Hi " + person.name + " your age is " + person.age;
}
console.log(greetMe({
    name: 'Aja',
    age: 25
}));
function renderShape(Shape) {
    console.log("Shape is ", Shape);
}
function renderArea(Shape) {
    console.log("Area is");
}
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Sub"] = 1] = "Sub";
    Arithmetic[Arithmetic["Div"] = 2] = "Div";
    Arithmetic[Arithmetic["Mul"] = 3] = "Mul";
})(Arithmetic || (Arithmetic = {}));
function doCalculation(a, b, type) {
    console.log(type);
    return 1;
}
const ans = doCalculation(1, 2, Arithmetic.Add);
