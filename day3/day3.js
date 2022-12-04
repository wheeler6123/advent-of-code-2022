//import data set
const { data, priorityKey, isLowerCase } = require('./inputDataDay3');

//split data set into individual rucksacks, each represented by 1 line
const sacksArr = data.split(/\n/);

//split each sack into two equal compartments, iterate though and look for the val that is in both compartments and push it to an array holding all of the misplaced items
const compartmentalizeAndFindMisplaced = arr => {
  let misplacedItems = [];
  
  sacksArr.forEach(sack => {
    const splitPoint = (sack.length/2);
    let comp1 = sack.slice(0,splitPoint).split('');
    let comp2 = sack.slice(splitPoint).split('');

    for(let i = 0; i<comp1.length; i++){
        if(comp2.includes(comp1[i])){
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
    if(isLowerCase(item)){
       sum += priorityValue(item);
    }else{
       sum += priorityValue(item) +26;
    }
  })
  return sum;
};


console.log(sumPriority(listItems))

