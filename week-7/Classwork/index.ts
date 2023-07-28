function calculateSum(first:number,second:number):number{
    return first + second
}

// console.log(calculateSum(2,4))


//Function with 3 args 2-nums and type using which calculation will happen

function calculate(
    first:number,
    second:number,
    type:'add'|'sub'|'mul'|'div',
    ): number {
    if(type === 'add') return first + second
    if(type === 'sub') return first - second
    if(type === 'mul') return first * second
    if(type === 'div') return first / second
    return -1
}

console.log(calculate(1,3,'add'))


//Interface - should always start with capital letter

interface PersonInterface{
    name:string,
    age:number
    greet():string
    genderProps:GenderSpecific
}

interface GenderSpecific{
    gender:string
    pronouns:string
    orientation:string
}


class Person implements PersonInterface{
    name:string;
    age:number;
    genderProps: GenderSpecific

    constructor(name:string,age:number,genderProps:GenderSpecific){
        this.name = name,
        this.age = age,
        this.genderProps = genderProps
    }
    greet():string{
        return "Hi Mr "+this.name;
    }

}

const Anurag = new Person('Anurag',26,{gender:'male',pronouns:'he/him',orientation:'straight'})
console.log(Anurag.greet())



interface Shape {
    length:number
    width:number
    area():number
}

class Square implements Shape{
    length: number
    width: number

    constructor(length:number,width:number){
        this.length = length
        this.width = width
    }
    area(): number {
        return this.length * this.width
    }
}

const Square1 = new Square(5,5)
console.log("Area of square1 is ",Square1.area())


//Type

type PersonType = {
    name:string
    age:number
}


function greetMe(person:PersonType){
    return "Hi "+person.name+ " your age is "+person.age
}

console.log(greetMe({
    name:'Aja',
    age:25
}))


interface Circle {
    radius:number
}

interface Square{
    side:number
}

interface Rectangle{
    width:number
    height:number
}

type Shapes = Rectangle | Circle | Square

function renderShape(Shape:Shape){
    console.log("Shape is ",Shape)
}

function renderArea(Shape:Shape){
    console.log("Area is")
}


enum Arithmetic{
    Add,
    Sub,
    Div,
    Mul
}

function doCalculation(a:number,b:number,type:Arithmetic){
    console.log(type)
    return 1
}

const ans = doCalculation(1,2,Arithmetic.Add)