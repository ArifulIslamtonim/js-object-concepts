// using object literal
const student = {name: 'Sakib AL Hasan', job: 'cricketer'};
// object constructor
const man = new Object();

//
const woman = Object.create(student)
console.log(woman.job);
// const woman = Object.create(null);

// santactic sugar
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pou = new People('habi', 45);
console.log(pou);

// function
function Manus (name) {
    this.name = name;
}
const mainse = new Manus('labbi');
console.log(mainse);