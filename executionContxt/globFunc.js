let age = 18;

function displayAge(){
    console.log("Age", age);
}

function changeAge(newAge){
    age = newAge;
    console.log("Changed age", age);
}

displayAge();
changeAge(22);
displayAge();