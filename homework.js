console.log('HELLO HOME WORK');

let y = function greet(name) {
    return `HELLO ${name} WISH U A GOOD DAY `
};
console.log(y('ali'));


let age = (n, m) => {
    return `ohhh wow so u are ${n} and u were born on ${m} `
};

console.log(age(55, 'march'))

console.log(((h) => { return `you are ${h} cm wooow!` })(120))

let height = 179
if (height < 150) {
    console.log('ur short')
} else if (height >= 180) {
    console.log('UR TALL')
} else {
    console.log('UR AVRAGE')
}


let n = 10;
while (n < 100) {
    console.log(n - 99);
    n++;
};
let word = ['HELLO', 'BYE', 'NICE']
for (let x = 0; x < word.length; x++) {
    console.log('\n', word[x].toLowerCase())
};

let word2 = 'ali';
for (let n = 0; n < word2.length; n++) {
    console.log(word2[n])
}
for (let n = 0; n < word2.length; n++) {
    for (let y = 1; y < 5; y++) {
        console.log(word2[n], y)
    }
};

// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */
let dog_s = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_n = ["Max", "HAS", "PuRple", "dog"]
for (let y = 0; y < dog_n.length; y++) {
    console.log(dog_n[y])
}


function findWords(dog_s, dog_n) {
    for (let x = 0; x < dog_n.length; x++) {
        if (dog_s.toLowerCase().includes(dog_n[x].toLowerCase())) {
            console.log('matched ' + dog_n[x]);
        }
        else {
            console.log('no matches');
        }
    }
}

// //Call method here with parameters
findWords(dog_s, dog_n)

// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

let names = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
// names.pop()

function replacing() {
    for (let x = 0; x < names.length; x++) {
        if (names[x].indexOf('Max') / 2 === 0) {
            console.log('even')
        } else if (names[x].indexOf('Reboot') / 2 === 0) {
            console.log('even')
        } else if (names[x].indexOf('Trucks') / 2 === 0) {
            console.log('even')
        } else {
            console.log('not even')
        }
    }
}

replacing()

// for (let i=0; i<names.length;i++){
//     if (names.indexOf(names[i].toLowerCase() /2===0))
//         console.log('even')
// }








// code WARS
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

// 2

function divisible(n, d){
    let answer =[];
    for (let i = 0; i < n.length; i++) {
        // console.log(n[i])
        if (n[i] % d === 0) {
            answer.push(n[i]);
        }
    }
    return answer

}
console.log(divisible([1,2,3,4,5,6], 2))
