// for loops
const twoSum = (arr, target) => {
    for (i=0; i <+ arr.length; i++) {
        for (j=i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            };
        };
    };
    return
};

console.log(twoSum([2,7,11,15], 9))

// array methods

