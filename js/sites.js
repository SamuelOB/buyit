function pesquisa() {
    removeDiv();
    reajustar();
    var p, q;
    var input = document.getElementById("search").value;
    p = input.split(" ").join("+");
    q = input.split(" ").join("%20");
    sendReqCarrefour(q);
    sendReqKabum(p);
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
function rasparKabum(documento){
    var imgs = documento.querySelectorAll(".sc-fzoyTs");
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
        var link2 = document.querySelectorAll(".nm-product-name-link");
        link2[i].target = "_blank";
        link2[i].href = link2[i].href.replace("file","https");
        link.href = link2[i].href;
    }
}
function rasparCissa(documento){
    var imgs = documento.querySelectorAll(".lazyload");
    console.log(imgs);
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
        console.log(imgs[i]);
        img.src = imgs[i].data-src;
        divNome.innerHTML = ps[i].innerHTML;
        divPreco.innerHTML = preco[i].innerHTML;
        link.href = a[i].href.replace("file","https");
        divLogo.src = "img/logo-cissa.png";
        link.appendChild(img);
        link.appendChild(divNome);
        link.appendChild(divPreco);
        divCelular.appendChild(link);
        divCelular.appendChild(divLogo);
        divHTML.appendChild(divCelular);
    }
}
function sendReqCarrefour(q){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var parser = new DOMParser();
            var documento = parser.parseFromString(this.responseText, "text/html");
            rasparCarrefour(documento);
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.carrefour.com.br/busca/"+q, true);
    xhttp.send();
}
function sendReqKabum(p){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var parser = new DOMParser();
            var documento = parser.parseFromString(this.responseText, "text/html");
            rasparKabum(documento);
        }
    };
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.kabum.com.br/cgi-local/site/listagem/listagem.cgi?string="+p+"&btnG=", true);
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

