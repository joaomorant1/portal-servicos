# Portal de Serviços Digitais

Projeto acadêmico desenvolvido para a disciplina de **Programação Web**. O portal tem como objetivo centralizar informações, oferecer orientações e fornecer um canal de comunicação direto com o usuário, simulando um ambiente corporativo moderno.

## 🚀 Funcionalidades Implementadas (Aulas 1 a 13)

O projeto foi construído de forma progressiva, englobando as seguintes tecnologias e lógicas:

- **HTML5 Semântico:** Estruturação com tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- **Acessibilidade:** Uso de atributos `alt` em imagens, `aria-live` para leitores de tela e associação correta de `<label>` com `<input>`.
- **CSS3:** Estilização responsiva, design limpo e focado na usabilidade.
- **JavaScript (Interatividade e DOM):**
  - **Catálogo Dinâmico:** Criação de cards de serviços via JavaScript a partir de um array de objetos.
  - **Consulta Interativa:** Respostas dinâmicas baseadas na escolha do usuário (if/else).
  - **Filtro por Categoria:** Filtragem em tempo real dos serviços disponíveis na tela.
  - **Validação de Formulário:** Uso de `addEventListener('submit')` e `preventDefault()` para validar campos (nome, e-mail e mensagem) antes do envio, exibindo alertas e mensagens de erro.
  - **Web Storage:** Uso de `localStorage` para salvar e recuperar a preferência de "Serviço Favorito" do usuário no navegador.

## 📂 Estrutura do Projeto

```text
portal-servicos/
│
├── css/
│   └── style.css       # Estilos e layout do site
├── js/
│   └── script.js       # Toda a lógica de interatividade e validação
│
├── index.html          # Página inicial (Apresentação)
├── servicos.html       # Página de serviços e interações dinâmicas
└── contato.html        # Página de formulário com validação JS
