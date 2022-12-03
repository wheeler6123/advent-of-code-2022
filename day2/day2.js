//Part 1 is at the top here. Part 2 is at the bottom, commented out. If wishing to run part 2, comment out all of part 1 and uncomment part 2

//import data set module, data set is encoded to mask actual moves played by each player
const data = require('./inputDataDay2')

//convert data into usable array of arrays of coded individual rounds of rock, paper, scissors (RPS)
const gameResultsArr = data.split(/\r?\n/).map(el => el.split(' '));

//helper function to be used to convert a coded set of RPS data to standard format
const standardizeChoice = c => {
    if(c === 'A' || c === 'X'){
        return 'rock';
    }else if(c === 'B' || c === 'Y'){
        return 'paper';
    }else if(c === 'C' || c === 'Z'){
        return 'scissors';
    }
};

//set up conversion key objects to assign variable points, one for choice and one for round results
const choicePointsKey = { rock: 1, paper: 2, scissors: 3 };
const resultPointsKey = { win: 6, draw: 3, lose: 0 };

//convert the coded input game data to standardized, using helper function
const standardizedArr = gameResultsArr.map(el => [standardizeChoice(el[0]), standardizeChoice(el[1])]);

//function to return P2's result for each round of RPS
const oneRoundRPS = array => {
    let p1 = array[0];
    let p2 = array[1];
    let result;
    if ((p1 === 'rock' && p2 === 'scissors') ||
        (p1 === 'paper' && p2 === 'rock') ||
        (p1 === 'scissors' && p2 === 'paper')) {
      result = 'lose';
    } else if (p1 === p2) {
      result = 'draw';
    } else {
      result = 'win';
    } return result;
  };

//returns an array of P2's score for each round of RPS in the formatted array
const p2ScoresArr = standardizedArr.map(el => resultPointsKey[oneRoundRPS(el)] + choicePointsKey[el[1]]);

//retrieves the sum total of all rounds of RPS for P2
const p2TotalScore = p2ScoresArr.reduce((a,c) => a+c,0)



console.log(p2TotalScore)

//Part 2 starts just below this line
/*
//import data set module, data set is encoded to mask actual moves played by each player
const data = require('./inputDataDay2')

//convert data into usable array of arrays of coded individual rounds of rock, paper, scissors (RPS)
const gameResultsArr = data.split(/\r?\n/).map(el => el.split(' '));

//keys to decode input data
const p1ChoiceKey = { A: 'rock', B: 'paper', C: 'scissors' }
const listResultKey = { X: 'lose', Y: 'draw', Z: 'win' }

//helper functiond to be used to convert a coded set of RPS data to standard format
const decodeRound = arr => {
    let p1Choice = arr[0];
    let listResult = arr[1];

    return [p1ChoiceKey[p1Choice], listResultKey[listResult]];
};

//set up conversion key objects to assign variable points, one for choice and one for round results
const choicePointsKey = { rock: 1, paper: 2, scissors: 3 };
const resultPointsKey = { win: 6, draw: 3, lose: 0 };

//convert the coded input game data to standardized, using helper function
const standardizedArr = gameResultsArr.map(round => decodeRound(round));

//function to return P2's result for each round of RPS
const oneRoundRPS = array => {
    const p1 = array[0];
    const result = array[1];
    let p2;
    let roundScore = 0;

    const winKey = { rock: 'paper', paper: 'scissors', scissors: 'rock' }
    const loseKey = { rock: 'scissors', paper: 'rock', scissors: 'paper' }
        
    if(result === 'draw'){
        p2 = p1;
    }else if(result === 'win'){
        p2 = winKey[p1];
    }else if(result === 'lose'){
        p2 = loseKey[p1];
    }

    return resultPointsKey[result] + choicePointsKey[p2];

  };

//returns an array of P2's score for each round of RPS in the formatted array
const p2ScoresArr = standardizedArr.map(el => oneRoundRPS(el));

//retrieves the sum total of all rounds of RPS for P2
const p2TotalScore = p2ScoresArr.reduce((a,c) => a+c,0)

console.log(p2TotalScore)
*/