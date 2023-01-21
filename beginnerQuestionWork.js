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
const arraySum = () => {

};

// 5. create a function that reverses an array

// 6. sort an array from lowest to highest

// 7. function that filters out negative numbers

// 8. remove spaces in a string

// 9. return a boolean if a number is divisible by 10

// 10. return the number of vowel in a string