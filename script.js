function calcularImpacto() {
  const quantidade = document.getElementById("quantidade").value;
  const resultado = document.getElementById("resultado");

  if (quantidade === "" || quantidade <= 0) {
    resultado.textContent = "Por favor, insira um número válido.";
    resultado.style.color = "red";
    return;
  }

  const impacto = quantidade * 2; // Exemplo simples: 2kg de impacto positivo por alimento
  resultado.textContent = `Você gerou aproximadamente ${impacto} kg de impacto positivo consumindo alimentos conscientes!`;
  resultado.style.color = "green";
}
