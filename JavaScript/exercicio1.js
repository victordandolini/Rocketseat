// declarando uma variavel
var weight2 

// descobrir o tipo de dado
 console.log(typeof weight2)

 // Atribuindo Valores de todos os tipos na Variavel
let name = "victor"
let age = 29
let weight = 74.9
let isSubscribed = true

// Criando um Objeto com varios tipos
let student = {
name: "victor",
age: 29,
weight:  74.9,
isSubscribed:  true,
}
let student2 = {
name: "moira",
age: 29,
weight:  64.9,
isSubscribed:  false,
}

// Criando uma frase com as propriedades do Objecto
console.log(`${student.name} tem ${student.age} anos e seu peso é ${student.weight} esta inscrito: ${student.isSubscribed}`);

// criando um Array
let students = [
 student
]

// Atribuindo um  objeto em nova posição do array
students[1] = student2

// Selecionando Posição no Array
console.log(students[1]);

// Demosntração de Hoisting com var
console.log(a)
var a = 1