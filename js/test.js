let nick;
console.log(nick)
let age = 12;
let numberOfSiblings = 1 + 3;
let numberOfCandies = 8;
console.log(numberOfCandies / numberOfSiblings);
let secondsInAMinute = 60;
let minutesInAHour = 60;
let secondsInAHour = secondsInAMinute * minutesInAHour;
console.log(secondsInAHour)
let highFives = 0;
++highFives;
console.log(highFives)
++highFives;
++highFives;
console.log(highFives);
let x = 10;
x = x + 5;
console.log(x);
x += 2;
console.log(x);

let greeting = "Hello";
let myName = "Nick";
console.log(greeting + myName);
let java = "Java";
console.log(java.length);
console.log(myName[2]);
console.log(myName[myName.length - 1]);
let longString = "My long string is long";
console.log(longString.slice(3, 14));
console.log("Hello there, how are you doing?".toUpperCase());


let hasApple = true;
let hasOrange = false;
console.log(hasApple || hasOrange);
console.log(!hasApple);

let isWeekend = false;
let hadShower = true;
 hasApple = false;
hasOrange = true;
let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange)
console.log(shouldGoToSchool)

let height = 65;
let heightRestriction = 60;
console.log(height > heightRestriction);

 height = 60;
 heightRestriction = 60;
console.log(height > heightRestriction);

console.log(height >= heightRestriction);

let mySecretNumber = 5;
let chico = 3;
console.log(mySecretNumber === chico);
let harpo = 7;
console.log(mySecretNumber === harpo)
let groucho = 5;
console.log(mySecretNumber === groucho);

let stringNumber = "5";
let actualNumber = 5;
console.log(stringNumber === actualNumber);
console.log(stringNumber == actualNumber);

// масиви
let dinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratos", "Brachi", "Pteranoton"];
console.log(dinosaurs[0])
console.log(dinosaurs[3])

let dinosaursAndNumber = [3, "dinosaur", ["triceraptor","stenozavr",364.5], 10]
console.log(dinosaursAndNumber[2]);
console.log(dinosaursAndNumber[2][0]);

console.log(dinosaurs.length)
console.log(dinosaurs[dinosaurs.length - 1])
console.log(dinosaurs)

console.log(dinosaurs.push("cat"))
console.log(dinosaurs.push("dog"))
console.log(dinosaurs.pop())
console.log(dinosaurs)
console.log(dinosaurs.pop())

console.log(dinosaurs.concat(greeting))
console.log(dinosaurs.concat(greeting, dinosaursAndNumber))
console.log(dinosaursAndNumber)
console.log(dinosaurs.indexOf("T-Rex"))

let boringAnimals = ["Monkay", "Cat", "Fish",
"Lizart"]
console.log(boringAnimals.join())
console.log(boringAnimals.join(","))
console.log(boringAnimals.join("7"))
console.log(boringAnimals.join(" ? "))
console.log(boringAnimals.join(" "))

let phrases = [
    "That sounds good",
    "Yes, you should definitely do that",
    "I'm not sure that's a great idea",
    "Maybe not today?",
    "Computer says no."
];
//чи варто мені бухнути
console.log(phrases[Math.floor(Math.random() * 5)], Math.random() * 5)
//чрмрмрммтм
console.log(phrases[Math.floor(Math.random() * 5)], Math.random() * 5)
//орпорарпв
console.log(phrases[Math.floor(Math.random() * 5)], Math.random() * 5)

//створення генератору образливих фраз

let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)]
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
let randomInsult = "Your " + randomBodyPart + " is like a  " +
    randomAdjective + " " + randomWord + "!!!";
console.log(randomInsult)

console.log(randomInsult = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" "))

console.log(randomInsult)






























