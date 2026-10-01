// 2 · ENCONTRE OS ELEMENTOS NO DOM
const campoServico = document.querySelector('#servico');
const botaoConsultar = document.querySelector('#btnConsultar');
const resultado = document.querySelector('#resultado');

// 3 e 4 · ESCUTE O CLIQUE, LEIA A ESCOLHA E TOME UMA DECISÃO
botaoConsultar.addEventListener("click", () => {
  const escolha = campoServico.value;
  
  // Dica: descomente a linha abaixo para testar no console se precisar
  // console.log(escolha); 

  if (escolha === "") {
    resultado.textContent = "Escolha um serviço antes de consultar.";
  } else if (escolha === "calendario") {
    resultado.textContent = "Acesse o Calendário Fiscal para ver prazos e lembretes de impostos.";
  } else if (escolha === "documentos") {
    resultado.textContent = "Gere recibos, contratos e propostas em poucos cliques.";
  } else if (escolha === "relacionamento") {
    resultado.textContent = "Organize sua agenda e mantenha o histórico dos clientes atualizado.";
  } else {
    resultado.textContent = "Serviço não identificado.";
  }
});