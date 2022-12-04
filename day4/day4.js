//import data set
const data = require('./inputDataDay4');

//split dataset into pairs of elves
const pairs = data.split(/\n/);

//helper function to check if the zones overlap for each pair of elves
const zonesOverlap = str => {
  const splitElves = str.split(',');
  const elf1 = splitElves[0].split('-');
  const elf2 = splitElves[1].split('-');

  return (+elf2[0] >= +elf1[0] && +elf2[1] <= +elf1[1]) || (+elf1[0] >= +elf2[0] && +elf1[1] <= elf2[1])
};

//return the length of an array containing all pairs that meet the criteria of overlap
const overlappingPairs = pairs.map(pair => zonesOverlap(pair)).filter(pair => pair).length;

console.log(overlappingPairs)