//funçao de teste
function calcular() {
  const operacao = document.getElementById("add").value;

  if (operacao == "soma") {
    resultado = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value); 
  }
  else if (operacao == "subtracao") {
    resultado = Number(document.getElementById("num1").value) - Number(document.getElementById("num2").value); 
  }
  else if (operacao == "multiplicacao") {
    resultado = Number(document.getElementById("num1").value) * Number(document.getElementById("num2").value);
  }
  else if (operacao == "divisao") {
    resultado = Number(document.getElementById("num1").value) / Number(document.getElementById("num2").value);   
  }
  const mostrarResultado = document.getElementById("mostrarResultado");
  mostrarResultado.textContent = resultado;
}

//Ainda falta fazer a escolha de bits, por enquanto o programa espera 8 bits, e limitar o input para apenas 0 e 1.
function operacaoBinarios() {
  const binarios = document.getElementById("binarios").value;
  const numBinario = document.getElementById("numBinario").value;
  let resultado = []
  if (binarios == "complemento1") {
    for(let i = 0; i <=7; i++) {
      let j = numBinario[i];
      if (numBinario[i] == "0") {
        j = "1";
      }
      else {
        j = "0";
      }
      resultado.push(j);
    }
      const mostrarBinario = document.getElementById("mostrarBinario");
      mostrarBinario.textContent = resultado.join('');
  }
}
