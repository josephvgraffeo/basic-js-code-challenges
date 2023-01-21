// 1. print all even numbers from 0-10
const getEven = (array) => {
    let evenArray = [];
    for (i=0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        };
    };
    console.log(evenArray);
};

console.log("\n");
getEven([0,1,2,3,4,5,6,7,8,9,10]);
console.log("\n");


// 2. print a multiplication table
const multTable = (x,y) => {
    let result = "";
    for (i=1; i <= x; i++) {
        for (j=1; j <= y; j++) {
            result += i*j + " ";
        };
        result += "\n";
    };
    console.log(result);
};
multTable(5,5);


// 3. kilometers to miles converter function
const kilometersToMiles = (kilo) => {
    let kiloToMile = kilo * 0.62137119
    console.log(`${kilo} Kilometers is ${kiloToMile} miles.`)
}
kilometersToMiles(15);
console.log("\n");


// 4. calculate the sum of numbers in an array
const arraySum = (array) => {
    let sum = 0
    for (i = 0; i <+ array.length; i++) {
        sum += array[i];
   }
   console.log(sum);
};

arraySum([10,20,20,100]);


// 5. create a function that reverses an array
const reverseArray = (array) => {
    console.log(array.reverse());
}

console.log(`\n`);
reverseArray([1,2,3,4,5]);


// 6. sort an array from lowest to highest
const sortArray = (array) => {
    let sortedArray = array.sort((a, b) => a - b);
    console.log(sortedArray);
};

console.log(`\n`);
sortArray([100,86,1,134,12,12,96]);


// 7. function that filters out negative numbers
let positiveArray = [];
const noNegatives = (array) => {
    for (i = 0; i <= array.length; i++) {
        if (array[i] >= 0) {
            positiveArray.push(array[i]);
        };
    }; console.log(positiveArray);
};

console.log(`\n`);
noNegatives([-1,-2,-4,-100, 0, 100, 200]);

// 8. remove spaces in a string
const noSpaces = (string) => {
    let fixedString = string.replaceAll(" ", "");
    console.log(fixedString);
};

console.log(`\n`);
noSpaces("See you space cowboy...");

// 9. return a boolean if a number is divisible by 10
const isDivByTen = (num) => {
    if (num % 10 === 0) {
        console.log(true)
    } else {
        console.log(false)
    };
};

console.log(`\n`);
isDivByTen(10);
isDivByTen(15);

// 10. return the number of vowels in a string
const countVowels = (string) => {
    const vowels = ["a", "e", "i", "o", "u", "y"];
    let vowelCount = 0;
    for (i = 0; i <= string.length; i++) {
        if (string[i] = vowels[i]) {
            vowelCount++
        };
    };
    console.log(vowelCount);
};

console.log(`\n`);
countVowels("See you space cowboy...")