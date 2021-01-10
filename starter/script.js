'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//const interface = `Audio`;
//const private = 534;


function logger() {
    console.log(`My name is Josh`);
}

logger();

function fruitProccessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProccessor(5, 0);

console.log(appleJuice);

const appleOrangeJuice = fruitProccessor(2, 4);
console.log(appleOrangeJuice);


function bikeType(yamaha, honda) {
    const bike = `bikes are ${yamaha} yamaha and ${honda} honda`;
    return bike;
}

const yamahaBike = bikeType('exciter', 'winner');
console.log(yamahaBike);


function cryptoCurrency(bitcoin, ether) {
    const coin = `Crypto Coin holders with ${bitcoin} bitcoin and with ${ether} ether are more likely to profit in 2021`;
    return coin;
}

const bitcoin = cryptoCurrency(1, 5);
console.log(bitcoin);
console.log(bitcoin);
console.log(bitcoin);
console.log(bitcoin);

function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(1997);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1997);
console.log(age2);


//Arrow function
const calcAge3 = birthYear => 2021 - birthYear;

const age3 = calcAge3(1997);
console.log(age3);

//Arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1997, `Josh`));
console.log(yearsUntilRetirement(1966, `Steve`));
console.log(yearsUntilRetirement(1969, `Corrina`));
console.log(yearsUntilRetirement(2000, `Jeremy`));


function cutFruitPieces(fruit) {
    return fruit * 3;
};

function fruitProccessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
};

console.log(fruitProccessor(2, 3));


const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }


}

console.log(yearsUntilRetirement(1997, `Josh`));
console.log(yearsUntilRetirement(1950, `Mike`));


const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);


const checkWinner = function (a, avgKoalas) {
    if (a >= avgKoalas * 2) {
        console.log(`Dolphins Win! (${a} vs. ${avgKoalas})`);
    } else if (avgKoalas >= a * 2) {
        console.log(`Koalas Win! (${avgKoalas} vs. ${a})`);
    } else {
        console.log(`No Team wins`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreA = calcAverage(10, 15, 100);
let scoreB = calcAverage(20, 30, 200);

const checkWinner = function (a, b) {
    if (a >= b * 2) {
        console.log(`The Dolphins win!  (${a} vs. ${b})`);
    } else if (b >= a * 2) {
        console.log(`The Koalas Win! (${b} vs. ${a})`);
    } else {
        console.log(`Nobody has won...`);
    }
}

checkWinner(scoreA, scoreB);

const friend1 = `aaron`;
const friend2 = `frank`;
const friend3 = `dan`;

const friends = [`aaron`, `frank`, `dan`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);


console.log(friends[friends.length - 1]);

friends[2] = `chuck`;
console.log(friends);

const firstName = `Josh`;
const josh = [firstName, `Wenner`, 2021 - 1997, `Teacher`, `Vietnam`, friends];

console.log(josh[josh.length - 1]);



const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);
//functions can be put inside a variable
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);
const friends = [`aaron`, `frank`, `dan`];
friends.push(`Justin`);

friends.unshift(`Jeff`);

if (friends.includes(`Justin`)) {
    console.log(`You have a friend called Justin`);
}

console.log(friends);

//used 'if else' statements originally to do this challenge.
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}


const bills = [125, 555, 44];

//wasn't able to do this part, as he didnt clarify
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];


console.log(bills, tips);
//able to do this on my own!
const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]]

console.log(total);
*/


/*


console.log(josh);

const nameKey = `Name`;
console.log(josh[`first` + nameKey]);
console.log(josh[`last` + nameKey]);
const interestedIn = prompt(`What do you want to know about Josh?  Choose between firstName, lastName, age, job and friends`);

if (josh[interestedIn]) {
    console.log(josh[interestedIn]);
} else {
    console.log(`Wrong request, Choose between firstName, lastName, age, job and friends`);
}

josh.location = `Vietnam`;
josh[`instagram`] = `@tallkidgoesplaces`;
console.log(josh);

//Challenge
`Josh has 3 friends, and his best friend is Aaron`

//I passed the challenge on my own
console.log(`Josh has ${josh.friends.length} and his best friend is ${josh.friends.shift()}`)
// OBJECTS:
const josh = {
    firstName: `Josh`,
    lastName: `Wenner`,
    birthYear: 1997,
    job: `Teacher`,
    friends: [`aaron`, `frank`, `dan`],
    hasDriversLicense: true,


    // calcAge: function () {
    //     return 2021 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(josh.calcAge());
console.log(josh.age);
console.log(josh.getSummary());



// Coding challenge #3
const calcBMI = (mass / height) ** 2;
const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function(mass, height) {
        console.log((this.mass / this.height) ** 2);
    },
};

const john = {
    firstName: `John`,
    lastName: `Smith`,
    mass: 92,
    height: 1.95,
};
//////////////////////////////////


const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifing weights reptition ${rep}`);
}

const josh = [
    `Josh`,
    `Wenner`,
    2021 - 1997,
    `Teacher`,
    [`Aaron`, `Frank`, `Dan`]
];

const types = [];

for (let i = 0; i < josh.length; i++) {
    // reading from josh array
    console.log(josh[i], typeof josh[i]);

    // filling types array
    // types[i] = typeof josh[i];

    types.push(typeof josh[i]);
}

console.log(types);




const years = [1969, 1985, 1997, 2005];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

// continue and breaks
for (let i = 0; i < josh.length; i++) {
    if (typeof josh[i] !== `string`) continue;

    console.log(josh[i], typeof josh[i]);
}

for (let i = 0; i < josh.length; i++) {
    if (typeof josh[i] === `number`) break;

    console.log(josh[i], typeof josh[i]);
}

const josh = [
    `Josh`,
    `Wenner`,
    2021 - 1997,
    `Teacher`,
    [`Aaron`, `Frank`, `Dan`]
];

for (let i = josh.length - 1; i >= 0; i--) {
    console.log(josh[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----starting exercise ${exercise}-----`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`lifting weights repetition ${rep}`);
    }
}


const population = 1000000;
const avgPopulation = 33000000;

if (population >= avgPopulation) {
    console.log(`Vietnam's population is above average`);
} else {
    console.log(`Population is below average`);
}
*/
const numNeighbors = prompt(`How many neighbors does your country have?`);

if (numNeighbors === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbors > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`there is no fucking border, just water.`)
}

console.log(numNeighbors);
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: lifting weights repetition ${rep}`);
//     rep++;
// }

let dice = Math.floor(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end`);
}


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 65, 103];

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}
console.log(bills, tips, total);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    console.log(sum);
}

console.log(calcAverage([2, 3, 6]));
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3]), calcTip(bills[4]), calcTip(bills[5]), calcTip(bills[6]), calcTip(bills[7]), calcTip(bills[8]), calcTip(bills[9]),];


// console.log(bills, tips);
// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2], calcTip(bills[3]) + bills[3], calcTip(bills[4]) + bills[4], calcTip(bills[5]) + bills[5], calcTip(bills[6]) + bills[6], calcTip(bills[7]) + bills[7], calcTip(bills[8]) + bills[8], calcTip(bills[9]) + bills[9]]

// console.log(total);



