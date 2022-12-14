/*--- Day 1: Calorie Counting ---
Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows.

To supply enough magical energy, the expedition needs to retrieve a minimum of fifty stars by December 25th. Although the Elves assure you that the grove has plenty of fruit, you decide to grab any fruit you see along the way, just in case.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input).

The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.

For example, suppose the Elves finish writing their items' Calories and end up with the following list:

1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
This list represents the Calories of the food carried by five Elves:

The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
The second Elf is carrying one food item with 4000 Calories.
The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
The fifth Elf is carrying one food item with 10000 Calories.
In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?*/

//P: input will be one, a very long list of integers representing calories carried by each elf, separated only by a spaced line between sets
//R: return an integer representing the sum of the calories the elf who is carrying the most 
/*E: 1000 
     2000
     3000

     4000

     5000
     6000

     7000
     8000
     9000

     10000*/
// **this data set should return 24,000, as the elf carrying 7k, 8k, and 9k calories is carrying the most**
//P: //first need to convert a large unformatted dataset to useable database
    //declare a var to hold the value of the dataset, and initialize it by unformatted table in backticks, to set it to a String
    //split the string on the empty lines between elves
    //now we have a jumbled string for each elf, split these individual elf strings on each new line, to create an array of arrays, each subarray representing the calories of each food item the elf is carrying
    //write a function that will map a new array, each element referring to the total calories carried by one elf
    //declare a var to hold the array of sums returned by the reducer function
    //write a function that will take in the array of sums stored in the var above and return them sorted in descending order
    //return the 0th index of the sorted array, the largest total calories carried by any elf

//import data module to access dataset
const data = require('./inputDataDay1')

//takes input string and splits into array of sorted arrays containing total calorie load for each elf in descending order
const totalCalsArrSortDesc = 
    data.split(/\n\n/)
        .map(elf => elf.split(/\r?\n/))
        .map(elf => elf.reduce((a, c) => +a + +c, 0))
        .sort((a,b) => b-a);

//solution for part 1
const mostCalsCarried = totalCalsArrSortDesc[0];

//add function for part two to return the sum of the total calories carried by the 3 elves carrying the most

//solution for part 2
const topThreeTotal = totalCalsArrSortDesc.slice(0,3).reduce((a,c) => a+c);

//ternary operator conditional to handle returning the appropriate solution
const sendCorrectResponse = part => part === 1 ? console.log(mostCalsCarried) : console.log(topThreeTotal);

sendCorrectResponse(2);
