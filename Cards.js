const Communicator = require('./Communicator');

class Cards {
  constructor(theme, questions, answers) {
    this.theme = theme;
    this.questions = questions;
    this.answers = answers;
    this.score = 0;
  }
}

module.exports = Cards;
