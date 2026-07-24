// Contador
let horas = 24;
let minutos = 0;
let segundos = 0;

setInterval(() => {

    if (segundos == 0) {
        if (minutos == 0) {
            if (horas > 0) {
                horas--;
                minutos = 59;
                segundos = 59;
            }
        } else {
            minutos--;
            segundos = 59;
        }
    } else {
        segundos--;
    }

    document.getElementById("tempo").innerHTML =
        String(horas).padStart(2, "0") + ":" +
        String(minutos).padStart(2, "0") + ":" +
        String(segundos).padStart(2, "0");

}, 1000);

function criarPropaganda() {

    let empresa = document.getElementById("empresa").value;
    let produto = document.getElementById("produto").value;
    let slogan = document.getElementById("slogan").value;
    let descricao = document.getElementById("descricao").value;
    let publico = document.getElementById("publico").value;
    let categoria = document.getElementById("categoria").value;
    let preco = Number(document.getElementById("preco").value);
    let desconto = Number(document.getElementById("desconto").value);

    let emoji = document.getElementById("emoji").value;

    let cor1 = document.getElementById("cor1").value;
    let cor2 = document.getElementById("cor2").value;
    let texto = document.getElementById("texto").value;

    let nota = Number(document.getElementById("nota").value);

    let promocao = document.getElementById("promocao").value;

    let frete = document.getElementById("frete").checked;
    let brinde = document.getElementById("brinde").checked;
    let selo = document.getElementById("selo").checked;
    let escuro = document.getElementById("escuro").checked;

    // Atualiza textos

    document.getElementById("empresaCard").innerHTML = empresa;
    document.getElementById("produtoCard").innerHTML = produto;
    document.getElementById("sloganCard").innerHTML = slogan;
    document.getElementById("descricaoCard").innerHTML = descricao;
    document.getElementById("publicoCard").innerHTML = "🎯 Público: " + publico;
    document.getElementById("categoriaCard").innerHTML = categoria;
    document.getElementById("emojiCard").innerHTML = emoji;

    // Fundo

    document.getElementById("card").style.background =
        "linear-gradient(135deg," + cor1 + "," + cor2 + ")";

    document.getElementById("card").style.color = texto;

    // Preço

    let novoPreco = preco - (preco * desconto / 100);

    if (desconto > 0) {

        document.getElementById("precoOriginal").innerHTML =
            "R$ " + preco.toFixed(2);

    } else {

        document.getElementById("precoOriginal").innerHTML = "";

    }

    document.getElementById("precoNovo").innerHTML =
        "R$ " + novoPreco.toFixed(2);

    // Estrelas

    let estrelas = "";

    for (let i = 0; i < nota; i++) {

        estrelas += "⭐";

    }

    document.getElementById("estrelas").innerHTML = estrelas;

    // Promoção

    if (promocao == "Sem promoção") {

        document.getElementById("promo").innerHTML = "";

    } else {

        document.getElementById("promo").innerHTML = "🔥 " + promocao;

    }

    // Frete

    if (frete) {

        document.getElementById("freteCard").innerHTML =
            "🚚 Frete Grátis";

    } else {

        document.getElementById("freteCard").innerHTML = "";

    }

    // Brinde

    if (brinde) {

        document.getElementById("brindeCard").innerHTML =
            "🎁 Brinde Exclusivo";

    } else {

        document.getElementById("brindeCard").innerHTML = "";

    }

    // Produto do Ano

    if (selo) {

        document.getElementById("seloAno").innerHTML =
            "🏆 Produto do Ano";

    } else {

        document.getElementById("seloAno").innerHTML = "";

    }

    // Curtidas

    document.getElementById("likes").innerHTML =
        Math.floor(Math.random() * 9000 + 1000);

    // Visualizações

    document.getElementById("views").innerHTML =
        Math.floor(Math.random() * 50000 + 10000);

    // Modo Escuro

    if (escuro) {

        document.getElementById("card").classList.add("dark");

    } else {

        document.getElementById("card").classList.remove("dark");

    }

    // Imagem

    let arquivo = document.getElementById("imagem").files[0];

    if (arquivo) {

        let leitor = new FileReader();

        leitor.onload = function(e) {

            let foto = document.getElementById("foto");

            foto.src = e.target.result;

            foto.style.display = "block";

        }

        leitor.readAsDataURL(arquivo);

    }

}

// Limpar

function limparCampos(){

    document.querySelectorAll("input").forEach(campo=>{

        if(campo.type=="text" || campo.type=="number"){

            campo.value="";

        }

    });

    document.querySelector("textarea").value="";

    document.getElementById("foto").style.display="none";

    document.getElementById("empresaCard").innerHTML="Sua Empresa";

    document.getElementById("produtoCard").innerHTML="Produto";

    document.getElementById("sloganCard").innerHTML="Seu slogan aparece aqui";

    document.getElementById("descricaoCard").innerHTML="Descrição do produto.";

    document.getElementById("publicoCard").innerHTML="🎯 Público";

    document.getElementById("categoriaCard").innerHTML="";

    document.getElementById("emojiCard").innerHTML="📦";

    document.getElementById("precoOriginal").innerHTML="";

    document.getElementById("precoNovo").innerHTML="R$ 0,00";

    document.getElementById("promo").innerHTML="";

    document.getElementById("freteCard").innerHTML="";

    document.getElementById("brindeCard").innerHTML="";

    document.getElementById("seloAno").innerHTML="";

    document.getElementById("likes").innerHTML="0";

    document.getElementById("views").innerHTML="0";

}