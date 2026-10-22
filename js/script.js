// ==========================================
// AULA 09 - ARRAY DE OBJETOS
// ==========================================
const servicos = [
  {
    nome: "Calendário Fiscal",
    descricao: "Acesse prazos, lembretes de impostos e declarações."
  },
  {
    nome: "Gerador de Documentos",
    descricao: "Crie recibos, contratos e propostas em poucos cliques."
  },
  {
    nome: "Central de Relacionamento",
    descricao: "Organize sua agenda e mantenha o histórico dos clientes."
  }
];

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

// ==========================================
// AULA 10 - CATÁLOGO DINÂMICO DE SERVIÇOS
// ==========================================
const listaServicos = document.querySelector("#listaServicos");

function renderizarServicos() {
  // Limpa o container antes de montar (evita duplicar)
  listaServicos.innerHTML = "";

  // Percorre o array de serviços
  servicos.forEach((servico) => {
    // Cria o card (article)
    const card = document.createElement("article");
    card.classList.add("card-servico");

    // Cria o título (h3)
    const titulo = document.createElement("h3");
    titulo.textContent = servico.nome;

    // Cria a descrição (p)
    const descricao = document.createElement("p");
    descricao.textContent = servico.descricao;

    // Coloca o título e a descrição dentro do card
    card.append(titulo, descricao);

    // Coloca o card dentro do container na página
    listaServicos.appendChild(card);
  });
}

// Executa a função para mostrar os cards na tela
renderizarServicos();

// ==========================================
// AULA 13 - LOCAL STORAGE (PREFERÊNCIA)
// ==========================================
const campoFavorito = document.querySelector("#servicoFavorito");

// Só executa se o campo existir na página (evita erro nas outras páginas)
if (campoFavorito) {
  const botaoFavorito = document.querySelector("#btnSalvarFavorito");
  const mensagemFavorito = document.querySelector("#favoritoSalvo");

  // 1. Recupera o valor salvo assim que a página carrega
  const favoritoSalvo = localStorage.getItem("servicoFavorito");
  if (favoritoSalvo) {
    campoFavorito.value = favoritoSalvo;
    mensagemFavorito.textContent = `Seu serviço favorito é: ${favoritoSalvo}`;
    mensagemFavorito.style.color = "green";
  }

  // 2. Salva a escolha quando o botão for clicado
  botaoFavorito.addEventListener("click", () => {
    const servico = campoFavorito.value;

    if (servico === "") {
      mensagemFavorito.textContent = "Escolha um serviço primeiro.";
      mensagemFavorito.style.color = "red";
      return;
    }

    // Salva no navegador
    localStorage.setItem("servicoFavorito", servico);
    
    mensagemFavorito.textContent = `Favorito salvo: ${servico}`;
    mensagemFavorito.style.color = "green";
  });
}