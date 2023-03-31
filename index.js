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
 


//  module.exports = Cards