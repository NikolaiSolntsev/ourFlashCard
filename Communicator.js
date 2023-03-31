const fs = require('fs').promises;
const path = require('path');
const { EOL } = require('os');
const readlineSync = require('readline-sync');

class Communicator {
  sayHay() {
    const number = readlineSync.question(
      `Выберите тему ${EOL} 1. Капибары ${EOL} 2. Котики ${EOL} 3. МиниПиг ${EOL}`
    );
    return number;
  }

  quiz(cards) {
    const question = cards.questions;
    for (let i = 0; i < question.length; i += 1) {
      console.log(question[i]);
      let clientAnswer = readlineSync.question(EOL);
      if (cards.answers[i].toLowerCase() === clientAnswer.toLowerCase()) {
        cards.score += 10;
        console.log('👍👍👍');
        console.log(`Твой счёт:  ${cards.score} очков${EOL}`);
      } else {
        console.log(
          `Неверно, 👎👎👎${EOL}А правильный ответ: ${cards.answers[i]}${EOL}Твой счёт:  ${cards.score} очков${EOL}${EOL}`
        );
        cards.score -= 10;
      }
    }
  }
}

module.exports = Communicator;
