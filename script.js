function calcular() {
   const operacao = document.getElementById("add").value;

    if (operacao == "soma") {
      resultado = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value) 
    }
    else if (operacao == "subtracao") {
      resultado = Number(document.getElementById("num1").value) - Number(document.getElementById("num2").value) 
    }
    else if (operacao == "multiplicacao") {
     resultado = Number(document.getElementById("num1").value) * Number(document.getElementById("num2").value)
    }
    else if (operacao == "divisao") {
     resultado = Number(document.getElementById("num1").value) / Number(document.getElementById("num2").value)   
    }
    const resultadoConta = document.getElementById("resultadoConta");
    resultadoConta.textContent = resultado
}
