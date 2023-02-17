function twoSum(arr, target) {
    for (let i=0; i < arr.length; i++) {
        for (let j=i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([1,4,7,9,10], 16))

// ***********************************************

function twoSumMap(arr, target) {
    let map = {}

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let matchingValue = target - arr[i]
        if (map[matchingValue] !== undefined) {
            return [map[matchingValue], i]
        } else {
            map[value] = i
        }
    }
}

console.log(twoSumMap([2,4,7,10,9,23], 25))
    
