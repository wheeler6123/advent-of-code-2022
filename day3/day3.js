//import data set
const { data, priorityKey, isLowerCase } = require('./inputDataDay3');

//split data set into individual rucksacks, each represented by 1 line
const sacksArr = data.split(/\n/);

//group sacks into threes for part 2
const groupThree = arr => {
  let grouped = [];

  for (let i = 0; i < arr.length; i += 3) {
    let three = arr.slice(i, i + 3);
    //console.log(three)
    grouped.push(three);
  }
  return grouped;
};

//split each sack into two equal compartments, iterate though and look for the val that is in both compartments and push it to an array holding all of the misplaced items
const compartmentalizeAndFindMisplaced = arr => {
  let misplacedItems = [];

  sacksArr.forEach(sack => {
    const splitPoint = (sack.length / 2);
    let comp1 = sack.slice(0, splitPoint).split('');
    let comp2 = sack.slice(splitPoint).split('');

    for (let i = 0; i < comp1.length; i++) {
      if (comp2.includes(comp1[i])) {
        misplacedItems.push(comp1[i]);
        break;
      }
    }
  });
  return misplacedItems;
};

// store the array of misplaced items in each sack in a var
const listItems = compartmentalizeAndFindMisplaced(sacksArr);

//iterate through array of misplaced items, adding priority values up in sum var and return sum
const sumPriority = arr => {
  let sum = 0;
  const priorityValue = char => priorityKey.indexOf(char.toLowerCase()) + 1;

  arr.forEach(item => {
    if (isLowerCase(item)) {
      sum += priorityValue(item);
    } else {
      sum += priorityValue(item) + 26;
    }
  })
  return sum;
};

//console.log(sumPriority(listItems))

//Part 2

//declare var to hold value of sacksArr split into groups of 3 elves
const threes = groupThree(sacksArr);

//for each group of 3 elves, return an array with 3 arrays, one hold split items for each elf
const splitElves = threes.map(elf => elf.map(str => str.split('')));

//helper function to find the badge in each group of elves
const findBadge = arr => {
  const sortArr = arr.sort((a, b) => a.length - b.length)

  let elf1 = [...new Set(sortArr[0])];
  let elf2 = [...new Set(sortArr[1])];
  let elf3 = [...new Set(sortArr[2])];

  let badge = '';

  for (let i = 0; i < elf1.length; i++) {
    if (elf2.includes(elf1[i])) {
      if (elf3.includes(elf1[i])) {
        badge = elf1[i];
      }
    }
  } return badge;
}

//declare var to hold the array of badges for all groups of elves
const badges = splitElves.map(group => findBadge(group));

//use the previous function for sumPriority to return the total priority value for all badges
console.log(sumPriority(badges));



