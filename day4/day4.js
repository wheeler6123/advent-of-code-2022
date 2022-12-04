//import data set
const data = require('./inputDataDay4');

//split dataset into pairs of elves
const pairs = data.split(/\n/);

//helper function to check if the zones overlap for each pair of elves
const zonesOverlapComplete = str => {
  const splitElves = str.split(',');
  const elf1 = splitElves[0].split('-');
  const elf2 = splitElves[1].split('-');

  return (+elf2[0] >= +elf1[0] && +elf2[1] <= +elf1[1]) || (+elf1[0] >= +elf2[0] && +elf1[1] <= elf2[1])
};

//return the length of an array containing all pairs that meet the criteria of overlap
const entirelyOverlappingPairs = pairs.map(pair => zonesOverlapComplete(pair)).filter(pair => pair).length;

//Part 2
const zonesOverlapPartial = str => {
  const splitElves = str.split(',');
  const elf1 = splitElves[0].split('-');
  const elf2 = splitElves[1].split('-');

  const elf1Start = +elf1[0];
  const elf1End = +elf1[1];
  const elf2Start = +elf2[0];
  const elf2End = +elf2[1];

  return (elf2Start <= elf1End && elf2End >= elf1Start) || (elf1Start <= elf2End && elf1End >= elf2Start)
};

const partialOverlappingPairs = pairs.map(pair => zonesOverlapPartial(pair)).filter(pair => pair).length;

console.log(partialOverlappingPairs);
