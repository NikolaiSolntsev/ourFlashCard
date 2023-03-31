const fs = require('fs').promises;
const path = require ('path');
const {EOL} = require('os');
const readlineSync = require('readline-sync');
const waitSync = require('wait-sync');
// const thema = require('./thema.js');


class Cards {
    consturctor (question,score=0) {
        this.question = question;
        this.score= score;
    }
};

const number = readlineSync.question(`выберите тему  ${EOL} 1. "Гарри Поттер"${EOL} 2. Капибары-убийцы ${EOL} 3. Эльбрус ${EOL}`);
// let number = Number(process.argv[2])

async function rieadFile(num){ 
    
    const theme = await fs.readFile(path.join(__dirname, `./topics/${num}_data.txt`),'utf-8');
   const result = theme.split(EOL).filter((el)=> el!=='');

return result 
}
 
async function getArrayQuestion () {

    const x =await rieadFile(number)
let array =[]; 
for (let i=0; i<x.length; i+=1){
   if (i%2===0){
    array.push(x[i])
} 
}
return array
}

async function getArrayAnswers () {
    const x =await rieadFile(number)
let array =[]; 
for (let i=0; i<x.length; i+=1){
   if (i%2===1){
    array.push(x[i])
} 
}

return array
}

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



//  module.exports = Cards

