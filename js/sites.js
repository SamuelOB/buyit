function pesquisa() {
    removeDiv();
    reajustar();
    var p, q;
    var input = document.getElementById("search").value;
    p = input.split(" ").join("+");
    q = input.split(" ").join("%20");
    sendReqColombo(q);
    sendReqSaldao(p);
    sendReqCasa(q);
}
function removeDiv(){
    var remove = document.querySelectorAll(".divHome");
    remove.forEach(function(rem) {
        rem.parentNode.removeChild(rem);
    });
}
function reajustar(){
    $("header.masthead").animate({
        padding: "2% 0"
    });
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
        var divNome = document.createElement("div");
        var divPreco = document.createElement("div");
        var link = document.createElement("a");
        var divLogo = document.createElement("img");
        divCelular.setAttribute("class","divHome");
        img.setAttribute("class","imgNew");
        divNome.setAttribute("class","divNome");
        divPreco.setAttribute("class","divPreco");
        divLogo.setAttribute("class","divLogo");
        link.setAttribute("class","link");
        link.target = "_blank";
        var rep = imgs[i].src;
        rep = rep.replace("file","https");
        img.src = rep;
        divNome.innerHTML = ps[i].innerHTML;
        divPreco.innerHTML = preco[i].innerHTML + parcela[i].innerHTML;
        divLogo.src = logo;
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular);
        link2[i].target = "_blank";
        link2[i].href = link2[i].href;
        link.href = link2[i].href;
    }
}
function rasparSaldao(documento){
    var imgs = documento.querySelectorAll(".product-img1");
    var ps = documento.querySelectorAll(".text-right");
    var preco = documento.querySelectorAll(".s-preco");
    var parcela = documento.querySelectorAll(".s-sem-juros");
    var logo = documento.querySelector(".logo");
    var link2 = documento.querySelectorAll(".product-image");
    for (let i=0; i<3; i++) {
        var divHTML = document.querySelector(".destaques_uni");
        var divCelular = document.createElement("div");
        var img = document.createElement("img");
        var divNome = document.createElement("div");
        var divPreco = document.createElement("div");
        var link = document.createElement("a");
        var divLogo = document.createElement("div");
        divCelular.setAttribute("class","divHome");
        img.setAttribute("class","imgNew");
        divNome.setAttribute("class","divNome");
        divPreco.setAttribute("class","divPreco");
        divLogo.setAttribute("class","divLogo");
        link.setAttribute("class","link");
        link.target = "_blank";
        img.src = imgs[i].src;
        divNome.innerHTML = ps[i].innerHTML;
        divPreco.innerHTML = preco[i].innerHTML + parcela[i].innerHTML;
        divLogo.innerHTML = logo.innerHTML;
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular);
        link2[i].target = "_blank";
        link2[i].href = link2[i].href;
        link.href = link2[i].href;
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
        var divNome = document.createElement("div");
        var divPreco = document.createElement("div");
        var link = document.createElement("a");
        var divLogo = document.createElement("img");
        divCelular.setAttribute("class","divHome");
        img.setAttribute("class","imgNew");
        divNome.setAttribute("class","divNome");
        divPreco.setAttribute("class","divPreco");
        divLogo.setAttribute("class","divLogo");
        link.setAttribute("class","link");
        link.target = "_blank";
        img.src = imgs[i].src;
        divNome.innerHTML = ps[i].innerHTML;
        divPreco.innerHTML = preco[i].innerHTML + parcela[i].innerHTML;
        divLogo.src = logo;
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular);
        link2[i].target = "_blank";
        link2[i].href = link2[i].href;
        link.href = link2[i].href;
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