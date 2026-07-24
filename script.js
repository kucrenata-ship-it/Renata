function criar(){

let nome=document.getElementById("nome").value;

let marca=document.getElementById("marca").value;

let preco=document.getElementById("preco").value;

let publico=document.getElementById("publico").value;

let descricao=document.getElementById("descricao").value;

let slogan=document.getElementById("slogan").value;

let cor=document.getElementById("cor").value;

let emoji=document.getElementById("emoji").value;

let resultado=document.getElementById("resultado");

resultado.style.background=cor;

resultado.innerHTML=`

<div class="emoji">${emoji}</div>

<h2>${nome}</h2>

<h3>${marca}</h3>

<div class="preco">R$ ${preco}</div>

<div class="slogan">"${slogan}"</div>

<div class="descricao">

${descricao}

</div>

<div class="publico">

🎯 Público-alvo: <b>${publico}</b>

</div>

`;

}