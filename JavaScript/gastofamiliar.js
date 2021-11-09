var gasto = {
    receita: [1000, 1200.50, 300.25],
    despesas: [2700, 300]
}
function soma(saldo) {
    var total = 0;
    for (let valor of saldo) {
        total += valor
    }
    return total
}


function calcTotal() {
var r1 = soma(gasto.receita)
var d1 = soma(gasto.despesas)
var calc = r1 - d1
var saldo = calc >= 0 ? "Saldo Positivo":"Saldo Negativo"
console.log(`${saldo}: R$${calc.toFixed(2)}`);
}

calcTotal()
  