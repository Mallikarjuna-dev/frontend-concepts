function userInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Name: ${this.age}`)
}

let user = { name: "Robert", age: "26" };

userInfo.call(user);