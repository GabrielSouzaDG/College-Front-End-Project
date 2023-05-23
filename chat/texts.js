const botao = document.querySelector('.botao');
const telaChat = document.querySelector(".mensagens");

botao.addEventListener("click", (e) => {
  e.preventDefault();

  const mensagem = document.querySelector(".mensagem");
  let mensagemTexto = mensagem.value;

  console.log(mensagemTexto);

  const caixaMensagem = document.createElement("div");
  caixaMensagem.className = 'classeMensagemItem'
  const paragrafo = document.createElement("p");


  paragrafo.innerHTML = `<img src='./imagens/imagem1.png' class="perfil"> ${mensagemTexto}`;
  caixaMensagem.appendChild(paragrafo);
  telaChat.appendChild(caixaMensagem);

  mensagem.value = " ";
});
