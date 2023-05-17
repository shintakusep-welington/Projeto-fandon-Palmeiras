alert("Bem vindo a pagina do Shintaku Palmeirense!");
/*
O que precisamos fazer? - quando clicarmos no botão de troca de papel de fundo, temos que alterar a imagem de fundo conforme a numeração e identificação de cada botão.

-Objetivo 1 - Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e alterar a imagem para lua.
Passo 1 - Pegar no JS o elemento html correspondente ao botão de troca de tema.
Passo 2 - Disponibilizar alguma forma de pegar no JS o elemento HTML correspondente ao body.
Passo 3 - Passo 3 - Criar algo que possa identificar o clique do usuário no botão de troca de tema.
Passo 4 - Adicionar a classe modo-escuro no body.
Passo 5 - Trocar a imagem do botão de alterar tema pra lua.
Passo 6 - Remover a classe do modo-escuro do body.

-Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem para sol.
Passo 6 - Verificar se o body ja tem a classe modo-escuro.
Passo 7 - Remover a classe do modo-escuro do body.
Passo 8 - Trocar a imagem do botão de alterar tema pro sol.


*/

// Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e alterar a imagem para lua.

//Passo 1 - pegar no JS o elemento html correspondente ao botão de troca de tema.
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//Passo 2 - disponibilizar alguma forma de pegar no JS o elemento HTML correspondente ao body.
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//Passo 3 - Criar algo que possa identificar o clique do usuário no botão de troca de tema.
botaoAlterarTema.addEventListener("click", () => {
    console.log("clicou no botão");

    //Passo 6 - Verificar se o body ja tem a classe modo-escuro.
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    //Passo 4 - Adicionar a classe modo-escuro no body.
    //Passo 7 - Remover a classe do modo-escuro do body. 
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        //Passo 8 - Trocar a imagem do botão de alterar tema pro sol.
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else {

        //Passo 5 - trocar a imagem do botão de alterar tema pra lua.
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

});