/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

let distance = 2500;
let time = 710;
let gender = "male";
let pushUps = 40;
let abs = 35;

/* 

    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar: 

    if(gender === 'male)
    ...

*/

function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;


if (gender ==="male" && distance >= 2400 && time <= 710 && pushUps >= 30 && abs >= 35){
  return passed;
  } else if (gender ==='female' && distance >= 2400 && time <= 840 && pushUps >=20 && abs >=30){
  return passed;}


  //Sua logica deve ser inserida aqui:

  // Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  
}

//para executar o script no terminal digite: node ./script.js
//para executar os testes no terminal digite: node --test ./test_cases.js

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;


