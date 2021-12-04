import "../src/style/index.scss";

const person = {
    firstName: "Muhammad Shohag",
    lastName: "Islam",
    fullName: function(){
        return `My Name Is ${this.firstName} ${this.lastName}`
    },
};
const obj = {
    ... person,
    age: 23
};
console.log(obj);
console.log(person)