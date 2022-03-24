// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
// a describe method that lists the name of the function OR naming of the particular test.
describe("codeMessage", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(codeMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//   ● codeMessage › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//   ReferenceError: codeMessage is not defined


// b) Create the function that makes the test pass.
// have the letters and their replacements set in a variable 
// create a function called codeMessage that takes in a string
// regex to find the letters and .replace to change those letters to the new coded message

const code = {
    a: 4,
    e: 3,
    i: 1,
    o: 0,
    A: 4,
    E: 3,
    I: 1,
    O: 0
 }
 
 const codeMessage = (str) => {
   return str.replace(/[aeioAEIO]/gi, (string) => code[string]); 
 }

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("containLetter", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        const letterA = "a"
        const letterE = "e"
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(containLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(containLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

  // ● containLetter › takes in an array of words and a single letter and returns all the words that contain that particular letter.

  //   ReferenceError: containLetter is not defined


// b) Create the function that makes the test pass.
// create a function containLetter that takes in two parameters 
// filter through the array 
// use toLowerCase 
// return the characters 


const containLetter = (array, letter) => {
    return array.filter(value => value.toLowerCase().includes(letter))
}




// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
  })

  // ● fullHouse › takes in an array of words and a single letter and returns all the words that contain that particular letter.

  //   ReferenceError: fullHouse is not defined

// // b) Create the function that makes the test pass.
// // create a function called fullHouse and takes in an array
// // Map through the array to find pairs
// // filter through the array with pairs then find the length 
// // includes will see if there is a pair of 3 and a pair

const fullHouse = (array) =>{
    let counter = array.map((value, i, array) =>
        array.filter(str => (str === value)).length)
            return (counter.includes(3)
            && counter.includes(2));
    }