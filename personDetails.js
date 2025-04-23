function personInfo() {
    console.log(`Name : ${this.name}, Age : ${this.age}`);
}

let person = {
    name: "Santo",
    age: 25
}

personInfo.call(person);