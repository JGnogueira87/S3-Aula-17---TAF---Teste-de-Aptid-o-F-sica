/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

let distance = 25000;  
let time = 710;
let gender = "male";
let pushUps = 40;
let abs = 35;

/* Determinei "let" para cada variável por entender que esses valores podem sofrer alterações. Por exemplo, se forem determinadas novas metas em um novo TAF.*/

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

  //Sua logica deve ser inserida aqui:

if (gender ==='male' && distance >= 2400 && time >= 720 && pushUps >= 30 && abs >= 35)

if(gender === 'female' && distance >= 2400 && time >= 840 && pushUps >= 20 && abs >= 30)

/*Na construção da lógica, determinei os valores ">=" pra cada etapa do teste, por entender que o candidátio só será aprovado no TAF se atingir os valores determinados na descrição da ativida, ou, se superar esses valores. Diferentemente disso, o candidáto será reprovado*/


  

  // Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  return passed;
}

//para executar o script no terminal digite: node ./script.js
//para executar os testes no terminal digite: node --test ./test_cases.js

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;
