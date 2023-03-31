async function checkCorrect() {
  let score = 0;
  const question = await getArrayQuestion();
  const answer = await getArrayAnswers();

  for (let i = 0; i < question.length; i += 1) {
    console.log(question[i]);
    let clientAnswer = readlineSync.question(EOL);
    console.log(clientAnswer);
    if (answer[i].toLowerCase() === clientAnswer.toLowerCase()){
      score +=10;
      console.log('Красавчик / Красавица');
      console.log('');
      console.log(Твой счёт:  ${score} очков);
  } else {console.log(Неверно, а правильный ответ: ${answer[i]}${EOL}${EOL});}
   }
  }
  checkCorrect()
