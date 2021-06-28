// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let number = 1;
while(number <= 5) {
  console.log(number);
  number++;
}
console.log("end of exercise1")
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let number2 = 1;
do {
  console.log(number2);
  number2++;
}
while (number2 <= 5);
console.log("end of exercise2")


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for(let number3 = 1; number3 <= 5; number3++) {
  console.log(number3);
}
console.log("end of exercise3")

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let number4a = 10;
while(number4a >= 1) {
  console.log(number4a);
  number4a--;
}
console.log("end of exercise4 while Loop")


let number4b = 10;
do {
  console.log(number4b)
  number4b--;
}
while (number4b >= 1);
console.log("end of exercise4 do while")

for(let number4c = 10; number4c >= 1; number4c--) {
  console.log(number4c);
}
console.log("end of exercise4 for")
console.log("end of exercise4")
// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let number5a = 7;
while(number5a <= 27) {
  console.log(number5a);
  number5a++;
}
console.log("end of exercise5 while Loop")

let number5b = 7;
do {
  console.log(number5b);
  number5b++;
}
while (number5b <= 27);
console.log("end of exercise5 do while")

for(let number5c = 7; number5c <= 27; number5c++) {
  console.log(number5c);
}
console.log("end of exercise5 for");
console.log("end of exercise5");

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let number6a = 10;
while(number6a < 100) {
  console.log(number6a);
  number6a += 10;
}
console.log("end of exercise6 while Loop");

let number6b = 10;
do {
  console.log(number6b);
  number6b += 10;
}
while (number6b < 100);
console.log("end of exercise6 do while");

for(let number6c = 10; number6c < 100; number6c += 10) {
  console.log(number6c);
}
console.log("end of exercise6 for");
console.log("end of exercise6");
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
/* This was an infinite loop because the ending condition(2) was greater than the counter variable of 1. The decrement starts at 1 and counts down so the condition of < 2 would never be met. The condition should be set up for the end of the loop target. */
let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}
console.log("end of exercise7")

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let myNumber = 20;
let num = 0;
do{
  console.log(num);
  num++;
}
while(num <= myNumber)

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
let myFavoriteNumber = 50;
for(let i = 0; i <= 100; i++) {
  if(i === myFavoriteNumber) {
    console.log(`${i} my favorite number!`);
  }else {
    console.log(`${i} not my favorite number`);
  }
}

// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//
/**** A loop is a sequence of instructions that is repeated until a certain condition is reached.

A For and While loop are entry controlled loops. In this type of loop the test condition is tested before entering the loop body.

A do-while loop is an exit controlled loop. In this type of loop the test condition is tested or evaluated at the end of loop body. Therefore, the loop body will execute atleast once, irrespective of whether the test condition is true or false.

A For loop is very flexible. You can do For loops with more than one counter, or have code executed on every step that doesn’t necessarily affect your counters. You should use a for loop when you know how many times the loop should run. A For loop provides a concise way of writing the loop structure. Unlike a while loop, a For statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.

A while loop should be used if you want the loop to break based on a condition other than the number of times it runs. It is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement. ****/

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 3; outsideCounter >= 0; outsideCounter-- ) {
  console.log(`counting down from ${outsideCounter}` );
  for(let insideCounter = outsideCounter; insideCounter >= 0; insideCounter-- ) {
    console.log(`inside ${insideCounter}`);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//
/**** I found this exercise to be on the easier side. It was easier than the conditionals exercise. At first, I had to google the while and do-while syntax. I used GeeksforGeeks and W3Schools for reference. I kept making syntax errors and simple typos which slowed me down. *****/

// Email your file to us or commit your file to GitHub and email us a link.