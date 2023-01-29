const numberPalindromeChecker = (num) => {
    console.log(num.toString() === num.toString().split("").reverse("").join(""));
};

numberPalindromeChecker("100") //false
numberPalindromeChecker("1001") //true
numberPalindromeChecker("racecar") //true
numberPalindromeChecker("dog") //false
