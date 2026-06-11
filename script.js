function calcularImpacto() {
  const quantidade = document.getElementById("quantidade").value;
  const resultado = document.getElementById("resultado");

  if (quantidade === "" || quantidade <= 0) {
    resultado.textContent = "Por favor, insira um número válido.";
    resultado.style.color = "red";
    return;
  }

  // Fórmula simples: cada alimento local gera 2 kg de impacto positivo (exemplo educativo)
  const impacto = quantidade * 2;
  resultado.textContent = `Consumindo ${quantidade} alimentos locais, você contribui com aproximadamente ${impacto} kg de impacto positivo na sua comunidade e no meio ambiente!`;
  resultado.style.color = "green";
}
