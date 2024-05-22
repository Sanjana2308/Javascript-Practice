console.log("Hi from loops")

const marks = [40, 50, 60, 70, 40];

for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);
}

console.log("for...in");
for (let idx in marks){
    console.log(marks[idx]);
}

for(let mark of marks){
    console.log(mark);
}

const avenger = {
    name: "Tony Stark",
    house: "h",
    networth: "5000",
    power: "p",
    phrase: "3000you",
};

for (let key in avenger){
    console.log(key, avenger[key]);
}

console.log(Object.keys(avenger))
console.log(Object.values(avenger))


const avenger1 = {
    name: "Tony Stark",
    house: "h",
    networth: "5000",
    power: "p",
    phrase: "3000you",
};

const details = {
    age: 40,
    power: "💿",
};

console.log({ ...avenger1, ...details});
console.log({ ...details, ...avenger1});

// This should be an error but it is not
// We cannot change whole of the Object height but we can change the value internally because when 
// we try to access the element heights[0] the address is not changed thus allowed
const heights = [120, 140, 190, 80, 170];
heights[0] = 90;
console.log(heights);


const avenger2 = {
    name: "Tony Stark",
    house: "h",
    networth: "5000",
    power: "p",
    phrase: "3000you",
};

avenger2.house = "🛖"; //Address maintains
console.log(avenger2)


var x1 = 3;
var x2 = "5";
console.log(x1 + x2); //Both converted to String - concatenation preferred here (Implicit Coercion)
console.log(x1 - x2);//x2 is converted to an integer
//Explicit Coercion
console.log(x1 + parseInt(x2));
console.log(x1 + +x2);

