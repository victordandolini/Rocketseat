
function notafinal(nota) {
    
    var frase = "Sua nota é "
    if (nota >= 9 && nota <= 10) {
        resultado = `${frase} A`
    } else if (nota < 9 && nota >= 8) {
        resultado = `${frase} B`
    } else if (nota < 8 && nota >= 7) {
        resultado = `${frase} C`
    } else if (nota < 7 && nota >= 6) {
        resultado = `${frase} D`
    } else if (nota < 6 && nota >= 0) {
        resultado = `${frase} F`
    } else if (nota < 0 || nota > 10) {
        resultado = "Valor invalido"
    } else {
        resultado = "Insira uma nota valida"
    }
    return resultado
    
}
var resultado = notafinal(prompt())
alert(resultado)
console.log(resultado);

// Esse script atribui uma string com valor em letras para as notas númericas
// com prevenção de erros