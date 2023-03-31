const fs = require('fs').promises;
const path = require('path');
const { EOL } = require('os');
const readlineSync = require('readline-sync');
const Communicator = require('./Communicator');
const Cards = require('./Cards');

async function rieadFile(num) {
  const theme = await fs.readFile(
    path.join(__dirname, `./topics/${num}_data.txt`),
    'utf-8'
  );
  const result = theme.split(EOL).filter((el) => el !== '');

  return result;
}

async function getArrayQuestion(number) {
  const x = await rieadFile(number);
  let array = [];
  for (let i = 0; i < x.length; i += 1) {
    if (i % 2 === 0) {
      array.push(x[i]);
    }
  }
  return array;
}

async function getArrayAnswers(number) {
  const x = await rieadFile(number);
  let array = [];
  for (let i = 0; i < x.length; i += 1) {
    if (i % 2 === 1) {
      array.push(x[i]);
    }
  }

  return array;
}

async function start() {
  const communicator = new Communicator();

  const theme = communicator.sayHay();

  const questions = await getArrayQuestion(theme);
  const answers = await getArrayAnswers(theme);

  const cards = new Cards(theme, questions, answers);

  communicator.quiz(cards)
}

start();
