// ==========================================
// AULA 09 - ARRAY DE OBJETOS
// ==========================================
const servicos = [
  {
    nome: "Calendário Fiscal",
    descricao: "Acesse prazos, lembretes de impostos e declarações.",
    categoria: "fiscal"
  },
  {
    nome: "Gerador de Documentos",
    descricao: "Crie recibos, contratos e propostas em poucos cliques.",
    categoria: "documentos"
  },
  {
    nome: "Central de Relacionamento",
    descricao: "Organize sua agenda e mantenha o histórico dos clientes.",
    categoria: "clientes"
  }
];

// 2 · ENCONTRE OS ELEMENTOS NO DOM
const campoServico = document.querySelector('#servico');
const botaoConsultar = document.querySelector('#btnConsultar');
const resultado = document.querySelector('#resultado');

// 3 e 4 · ESCUTE O CLIQUE, LEIA A ESCOLHA E TOME UMA DECISÃO
if (botaoConsultar) { // Proteção para não dar erro na página de contato
  botaoConsultar.addEventListener("click", () => {
    const escolha = campoServico.value;

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
}

// ==========================================
// AULA 10 - CATÁLOGO DINÂMICO DE SERVIÇOS
// ==========================================
const listaServicos = document.querySelector("#listaServicos");

function renderizarServicos() {
  if (!listaServicos) return; // Proteção

  listaServicos.innerHTML = "";

  servicos.forEach((servico) => {
    const card = document.createElement("article");
    card.classList.add("card-servico");
    card.setAttribute("data-categoria", servico.categoria);

    const titulo = document.createElement("h3");
    titulo.textContent = servico.nome;

    const descricao = document.createElement("p");
    descricao.textContent = servico.descricao;

    card.append(titulo, descricao);
    listaServicos.appendChild(card);
  });
}

renderizarServicos();

// ==========================================
// AULA 13 - LOCAL STORAGE (PREFERÊNCIA)
// ==========================================
const campoFavorito = document.querySelector("#servicoFavorito");

if (campoFavorito) {
  const botaoFavorito = document.querySelector("#btnSalvarFavorito");
  const mensagemFavorito = document.querySelector("#favoritoSalvo");

  const favoritoSalvo = localStorage.getItem("servicoFavorito");
  if (favoritoSalvo) {
    campoFavorito.value = favoritoSalvo;
    mensagemFavorito.textContent = `Seu serviço favorito é: ${favoritoSalvo}`;
    mensagemFavorito.style.color = "green";
  }

  botaoFavorito.addEventListener("click", () => {
    const servico = campoFavorito.value;

    if (servico === "") {
      mensagemFavorito.textContent = "Escolha um serviço primeiro.";
      mensagemFavorito.style.color = "red";
      return;
    }

    localStorage.setItem("servicoFavorito", servico);
    
    mensagemFavorito.textContent = `Favorito salvo: ${servico}`;
    mensagemFavorito.style.color = "green";
  });
} // <--- AQUI ESTÁ O FECHAMENTO CORRETO DO BLOCO DE FAVORITOS

// ==========================================
// AULA 11 - FILTRO POR CATEGORIA
// ==========================================
const filtroCategoria = document.querySelector("#filtroCategoria");
const cardsServicos = document.querySelectorAll(".card-servico");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

if (filtroCategoria) {
  filtroCategoria.addEventListener("change", () => {
    const categoriaEscolhida = filtroCategoria.value;
    let quantidadeVisivel = 0;

    cardsServicos.forEach((card) => {
      const categoriaDoCard = card.getAttribute("data-categoria");
      const deveMostrar = categoriaEscolhida === "todas" || categoriaDoCard === categoriaEscolhida;
      
      card.hidden = !deveMostrar;

      if (deveMostrar) {
        quantidadeVisivel++;
      }
    });

    if (mensagemFiltro) {
      mensagemFiltro.textContent = quantidadeVisivel === 0 ? "Nenhum serviço encontrado nesta categoria." : "";
    }
  });
}

// ==========================================
// VALIDAÇÃO DO FORMULÁRIO (CONTATO)
// ==========================================
const formContato = document.querySelector("#formContato");

if (formContato) {
  formContato.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede a página de recarregar

    const campoNome = document.querySelector("#nome").value.trim();
    const campoEmail = document.querySelector("#email").value.trim();
    const campoMensagem = document.querySelector("#mensagem").value.trim();
    const statusForm = document.querySelector("#statusForm");

    if (campoNome.length < 3) {
      alert("Por favor, informe seu nome completo (pelo menos 3 letras).");
      return;
    }
    if (!campoEmail.includes("@") || !campoEmail.includes(".")) {
      alert("Por favor, informe um e-mail válido.");
      return;
    }
    if (campoMensagem.length < 10) {
      alert("Sua mensagem precisa ter pelo menos 10 caracteres.");
      return;
    }

    // Se passou por todas as validações, mostra sucesso
    if (statusForm) {
      statusForm.textContent = "Mensagem enviada com sucesso!";
      statusForm.style.color = "green";
    } else {
      alert("Mensagem validada com sucesso!");
    }
    
    formContato.reset(); // Limpa o formulário
  });
}
