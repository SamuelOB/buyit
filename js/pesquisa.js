function pesquisar() {
    reajustar();
    comentario();
}
function reajustar(){
    $("header").animate({
        height: "21.5vh"
    });
}
function comentario(){
    footer = document.querySelector("footer");
    sessao = document.createElement("section");
    sessao.setAttribute("class","sessao");

    comentarios = document.createElement("div");
    comentarios.setAttribute("class", "comentarios");
    novoComentario = document.createElement("div");
    novoComentario.setAttribute("class", "enviaComentario");
    imagemAvaliacao = document.createElement("div");
    imagemAvaliacao.setAttribute("class", "imagemAvaliacao");
    dados = document.createElement("div");
    dados.setAttribute("class", "dados");

    nomeLabel = document.createElement("label");
    nome = document.createElement("input");
    comentarioLabel = document.createElement("label");
    coment = document.createElement("input");
    
    nomeLabel.innerHTML = "Nome";
    comentarioLabel.innerHTML = "Comentário";
    
    //botoes
    input = document.createElement("input");
    input.setAttribute("class", "file-button");
    input.type = "button";
    input.value = "Escolha sua foto";
    inputInvisivel = document.createElement("input");
    inputInvisivel.setAttribute("class", "file-chooser");
    inputInvisivel.type = "file";
    inputInvisivel.accept = "image/*";
    img = document.createElement("img");
    img.setAttribute("class", "preview-img");

    //botão para enviar comentario
    inputEnvia = document.createElement("input");
    inputEnvia.type = "button"; 
    inputEnvia.value = "Enviar";
    inputEnvia.addEventListener("click", envia);
    input.addEventListener("click", imagem);

    imagemAvaliacao.appendChild(img);
    imagemAvaliacao.appendChild(input);
    imagemAvaliacao.appendChild(inputInvisivel); 
    dados.appendChild(nomeLabel);
    dados.appendChild(nome);
    dados.appendChild(comentarioLabel);
    dados.appendChild(coment);
    dados.appendChild(inputEnvia);
    novoComentario.appendChild(imagemAvaliacao);
    novoComentario.appendChild(dados);
    sessao.appendChild(comentarios);
    sessao.appendChild(novoComentario);
    footer.parentNode.insertBefore(sessao, footer);
}
function envia(){
    var div = document.querySelector(".div");
    var img = document.createElement("img");
    div.appendChild(img);
    img.src = previewImg.src;
}
function imagem(){
    const $ = document.querySelector.bind(document);
    const previewImg = $('.preview-img');
    const fileChooser = $('.file-chooser');
    const fileButton = $('.file-button');
    fileButton.onclick = () => fileChooser.click();

    fileChooser.onchange = e => {
        const fileToUpload = e.target.files.item(0);
        const reader = new FileReader();
        reader.onload = e => previewImg.src = e.target.result;
        reader.readAsDataURL(fileToUpload);
    };
}
