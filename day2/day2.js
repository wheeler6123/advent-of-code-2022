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