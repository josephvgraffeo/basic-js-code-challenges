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

// space efficient
function twoSumLoop(arr, target) {
    for (let i=0; i < arr.length; i++) {
        for (let j=i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSumLoop([2, 8, 9, 11, 5], 14))

// time efficient
function twoSumMap(arr, target) {
    let map = {}
    for (let i=0; i < arr.length; i++) {
        let value = arr[i]
        let matchingPair = target - value
        if (map[matchingPair] !== undefined) {
            return [map[matchingPair], i]
        } else {
            map[value] = i
        }
    }
}

console.log(twoSumMap([2, 5, 9, 10, 14], 12))