// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = parseInt(prompt("Digite o primeiro número"));
const numberTwo = parseInt(prompt("Digite o segundo número"));

const sum = numberOne + numberTwo;

alert(`O resultado da soma é: ${sum}`);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//💡 Para saber o tipo de dado você pode usar o operador `typeof`
const isNumber = 10;

if (typeof isNumber == "number") {
  alert(`${isNumber} é um número!`);
} else {
  alert(`${isNumber} não é um número`);
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isString = "Ola";

if (typeof isString == "string") {
  alert(`${isString} é uma string!`);
} else {
  alert(`${isString} não é uma string`);
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBoolean = true

if (typeof isBoolean == 'boolean') {
    alert("É um booleano")
} else {
    alert("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const sub = numberOne - numberTwo

alert(`Resultado: ${sub}`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const mult = numberOne * numberTwo

alert(`Resultado: ${mult}`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const div = numberOne / numberTwo

alert(`Resultado: ${div}`)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const isEvenNumber = 4

if(isEvenNumber % 2 == 0) {
    alert(`${isEvenNumber} É um número par`)
} else {
    alert(`${isEvenNumber} Não é um número par`)
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isOddNumber = 3

if(isOddNumber % 2 == 1) {
    alert(`${isOddNumber} É um número ímpar`)
} else {
    alert(`${isOddNumber} Não é um número ímpar`)
}