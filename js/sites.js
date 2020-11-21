var price = [];
var contador = 0;

function sort(){
    price.sort(function(a, b){return a-b});
    var divOrg = document.querySelector(".destaques_uni");

    for (let i=0; i<9; i++){
        var divs = document.getElementById(price[i]);
        var div = document.createElement("div");
        div.setAttribute("class","divHome");
        if (divs){
            div.innerHTML = divs.innerHTML;
            var remove = document.getElementById(price[i]);
            remove.parentNode.removeChild(remove);
            divOrg.appendChild(div);
        }
    }

}

function pesquisa() {
    removeDiv();
    reajustar();
    var p, q;
    var input = document.getElementById("searchbar").value;
    p = input.split(" ").join("+");
    q = input.split(" ").join("%20");
    sendReqColombo(q);
    sendReqSaldao(p);
    sendReqCasa(q);
    comentario();
}
function removeDiv(){
    var remove = document.querySelectorAll(".divHome");
    remove.forEach(function(rem) {
        rem.parentNode.removeChild(rem);
    });
    var remove2 = document.querySelectorAll("#highlights");
    remove2.forEach(function(rem) {
        rem.parentNode.removeChild(rem);
    });
}
function reajustar(){
    $("header.masthead").animate({
        padding: "2% 0"
    });
}
function comentario(){
    var comentario = document.querySelector("#session-comentarios");
    var historico = document.querySelector("#session-historico");
	var fitro = document.querySelector("#byPrice");
    comentario.style.display="flex";
    historico.style.position="inherit";
	fitro.style.display="block";
}
function rasparColombo(documento){
    var imgs = documento.querySelectorAll(".nm-product-img");
    var ps = documento.querySelectorAll(".nm-product-name");
    var preco = documento.querySelectorAll(".nm-price");
    var parcela = documento.querySelectorAll(".nm-installment-container");
    var link2 = documento.querySelectorAll(".nm-product-info");
    var logo = "https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2052863/regular_43809099b8783e285d0e7fb3c32076e5.png";
    for (let i=0; i<3; i++) {
        var divHTML = document.querySelector(".destaques_uni");
        var divCelular = document.createElement("div");
        var img = document.createElement("img");
        var estrela = document.createElement("img");
        var divNome = document.createElement("div");
        var divPreco = document.createElement("div");
        var link = document.createElement("a");
        var divLogo = document.createElement("img");
        divCelular.setAttribute("class","divHome");
        divCelular.setAttribute("id", preco[i].innerHTML.substr(0, preco[i].innerHTML.indexOf(',')).replace(/\D+/g, ''));
        price[contador] = preco[i].innerHTML.substr(0, preco[i].innerHTML.indexOf(',')).replace(/\D+/g, '');
        img.setAttribute("class","imgNew");
        estrela.setAttribute("class","imgEstrela");
        divNome.setAttribute("class","divNome");
        divPreco.setAttribute("class","divPreco");
        divLogo.setAttribute("class","divLogo");
        link.setAttribute("class","link");
        link.target = "_blank";
        var rep = imgs[i].src;
        rep = rep.replace("file","https");
        img.src = rep;
        estrela.src = "img/estrela_3.png";
        divNome.innerHTML = ps[i].innerHTML;
        divPreco.innerHTML = preco[i].innerHTML + " à vista ou " + parcela[i].innerHTML;
        divLogo.src = logo;
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(estrela);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular);
        var rep2 = link2[i].href;
        rep2 = rep2.replace("file","https");
        link2[i].target = "_blank";
        link2[i].href = rep2;
        link.href = rep2;
        contador = contador + 1;
    }
}
function rasparSaldao(documento){
    var imgs = documento.querySelectorAll(".product-img1");
    var ps = documento.querySelectorAll(".text-right");
    var preco = documento.querySelectorAll(".s-preco");
    var parcela = documento.querySelectorAll(".s-sem-juros");
    var logo = documento.querySelector(".logo");
    var link2 = documento.querySelectorAll(".product-image");
    var cont = 1;
    for (let i=0; i<3; i++) {
        var divHTML = document.querySelector(".destaques_uni");
        var divCelular = document.createElement("div");
        var img = document.createElement("img");
        var estrela = document.createElement("img");
        var divNome = document.createElement("div");
        var divPreco = document.createElement("div");
        var link = document.createElement("a");
        var divLogo = document.createElement("div");
        divCelular.setAttribute("class","divHome");
        divCelular.setAttribute("id", preco[i].innerHTML.substr(0, preco[i].innerHTML.indexOf(',')).replace(/\D+/g, ''));
        price[contador] = preco[i].innerHTML.substr(0, preco[i].innerHTML.indexOf(',')).replace(/\D+/g, '');
        img.setAttribute("class","imgNew");
        estrela.setAttribute("class","imgEstrela");
        divNome.setAttribute("class","divNome");
        divPreco.setAttribute("class","divPreco");
        divLogo.setAttribute("class","divLogo");
        link.setAttribute("class","link");
        link.target = "_blank";
        img.src = imgs[i].src;
        estrela.src = "img/estrela_5.png";
        divNome.innerHTML = ps[cont].innerHTML;
        if (preco[i].innerHTML.substr(0, preco[i].innerHTML.indexOf(',')).replace(/\D+/g, '')) {
            divPreco.innerHTML = preco[i].innerHTML + " à vista ou " + parcela[i].innerHTML;
        }
        else{
            divPreco.innerHTML = "Produto indisponível no momento";
        }
        divLogo.innerHTML = logo.innerHTML;
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(estrela);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular);
        link2[i].target = "_blank";
        link2[i].href = link2[i].href;
        link.href = link2[i].href;
        cont = cont + 7;
        contador = contador + 1;
    }
}
function rasparCasa(documento){
    var imgs = documento.querySelectorAll(".nm-product-img");
    var ps = documento.querySelectorAll(".nm-product-name");
    var preco = documento.querySelectorAll(".nm-price-value");
    var parcela = documento.querySelectorAll(".nm-installment-container");
    var link2 = documento.querySelectorAll(".nm-product-img-link");
    var logo = "https://www.whatsrel.com.br/wp-content/uploads/2018/11/casaevideo-1520952054-logopng.png";
    for (let i=0; i<3; i++) {
        var divHTML = document.querySelector(".destaques_uni");
        var divCelular = document.createElement("div");
        var img = document.createElement("img");
        var estrela = document.createElement("img");
        var divNome = document.createElement("div");
        var divPreco = document.createElement("div");
        var link = document.createElement("a");
        var divLogo = document.createElement("img");
        divCelular.setAttribute("class","divHome");
        divCelular.setAttribute("id", preco[i].innerHTML.substr(0, preco[i].innerHTML.indexOf(',')).replace(/\D+/g, ''));
        price[contador] = preco[i].innerHTML.substr(0, preco[i].innerHTML.indexOf(',')).replace(/\D+/g, '');
        img.setAttribute("class","imgNew");
        estrela.setAttribute("class","imgEstrela");
        divNome.setAttribute("class","divNome");
        divPreco.setAttribute("class","divPreco");
        divLogo.setAttribute("class","divLogo");
        link.setAttribute("class","link");
        link.target = "_blank";
        img.src = imgs[i].src;
        estrela.src = "img/estrela_1.png";
        divNome.innerHTML = ps[i].innerHTML;
        divPreco.innerHTML = preco[i].innerHTML + " à vista ou " + parcela[i].innerHTML;
        divLogo.src = logo;
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(estrela);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular);
        link2[i].target = "_blank";
        link2[i].href = link2[i].href;
        link.href = link2[i].href;
        contador = contador + 1;
    }
}
function sendReqColombo(q){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var parser = new DOMParser();
            var documento = parser.parseFromString(this.responseText, "text/html");
            rasparColombo(documento);
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://pesquisa.colombo.com.br/busca?q="+q+"&televendas=", true);
    xhttp.send();
}
function sendReqSaldao(p){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var parser = new DOMParser();
            var documento = parser.parseFromString(this.responseText, "text/html");
            rasparSaldao(documento);
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.saldaodainformatica.com.br/procurar?controller=search&orderby=position&orderway=desc&search_query="+p, true);
    xhttp.send();
}
function sendReqCasa(q){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var parser = new DOMParser();
            var documento = parser.parseFromString(this.responseText, "text/html");
            rasparCasa(documento);
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://busca.casaevideo.com.br/busca?q="+q, true);
    xhttp.send();
}