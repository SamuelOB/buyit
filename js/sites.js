function pesquisa() {
    removeDiv();
    reajustar();
    var p;
    var input = document.getElementById("search").value;
    p = input.split(" ").join("+");
    sendReqCarrefour(p);
    sendReqLuadi(p);
    sendReqCissa(p);
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
function rasparCarrefour(documento){
    var imgs = documento.querySelectorAll(".nm-product-img");
    var ps = documento.querySelectorAll(".nm-product-name");
    var preco = documento.querySelectorAll(".nm-price-container");
    var parcela = documento.querySelectorAll(".nm-installment-container");
    var logo = documento.querySelector(".simple-banner-component.simple-banner");
    for (let i=0; i<5; i++) {
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
        var rep = imgs[i].src;
        rep = rep.replace("file","https");
        img.src = rep;
        divNome.innerHTML = ps[i].innerHTML;
        divPreco.innerHTML = preco[i].innerHTML + parcela[i].innerHTML;
        divLogo.innerHTML = logo.innerHTML;
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular);
        var link2 = document.querySelectorAll(".nm-product-name-link");
        link2[i].target = "_blank";
        link2[i].href = link2[i].href.replace("file","https");
        link.href = link2[i].href;
    }
}
function rasparLuadi(documento){
    var imgs = documento.querySelectorAll(".spotImg img:first-child");
    var ps = documento.querySelectorAll(".spotTitle");
    var preco = documento.querySelectorAll(".precoPor");
    var parcela = documento.querySelectorAll(".precoParcela");
    var a = documento.querySelectorAll(".spot-parte-dois");
    var logo = documento.querySelector(".headerLogo");
    for (let i=0; i<5; i++) {
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
        link.setAttribute("class","link");
        divLogo.setAttribute("class","divLogo");
        link.target = "_blank";
        img.src = imgs[i].src;
        divNome.innerHTML = ps[i].innerHTML;
        divPreco.innerHTML = preco[i].innerHTML + parcela[i].innerHTML;
        divLogo.innerHTML = logo.innerHTML;
        link.href = a[i].href.replace("file:///C:","https://www.luadishop.com.br");
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular); 
    }
}
function rasparCissa(documento){
    var imgs = documento.querySelectorAll(".lazyOwl");
    var ps = documento.querySelectorAll(".product-name");
    var preco = documento.querySelectorAll(".price-big");
    var a = documento.querySelectorAll(".product-wrapper a");
    for (let i=0; i<5; i++) {
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
        divPreco.innerHTML = preco[i].innerHTML;
        link.href = a[i].href.replace("file","https");;
        divLogo.src = "img/logo-cissa.png";
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular);
    }
}
function sendReqCarrefour(p){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var parser = new DOMParser();
            var documento = parser.parseFromString(this.responseText, "text/html");
            rasparCarrefour(documento);
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://busca.carrefour.com.br/busca?q="+p, true);
    xhttp.send();
}
function sendReqLuadi(p){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var parser = new DOMParser();
            var documento = parser.parseFromString(this.responseText, "text/html");
            rasparLuadi(documento);
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.luadishop.com.br/busca?busca="+p, true);
    xhttp.send();
}
function sendReqCissa(p){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var parser = new DOMParser();
            var documento = parser.parseFromString(this.responseText, "text/html");
            rasparCissa(documento);
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.cissamagazine.com.br/busca?q="+p, true);
    xhttp.send();
}
