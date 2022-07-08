var pesoNaTerra = document.getElementById("peso-na-terra");
var planetaEscolhido = document.getElementById("planeta");
var pesoEmOutroPlaneta = document.getElementById("peso-convertido");
var botaoCalcularPeso = document.getElementById("botao-calcular-peso");
var stringMercurio = document.getElementById("Mercurio");
var stringVenus = document.getElementById("Venus");
var stringMarte = document.getElementById("Marte");
var stringJupiter = document.getElementById("Jupiter");
var stringSaturno = document.getElementById("Saturno");

function calcularPeso() {
    if (planetaEscolhido.value == stringMarte.innerHTML) {
        pesoEmOutroPlaneta.innerHTML = 'Seu peso em Marte é ' + Number(pesoNaTerra.value) * 0.377 + ' N!';
    } else if (planetaEscolhido.value == stringMercurio.innerHTML) {
        pesoEmOutroPlaneta.innerHTML = 'Seu peso em Mercúrio é ' + Number(pesoNaTerra.value) * 0.378 + ' N!';
    } else if (planetaEscolhido.value == stringVenus.innerHTML) {
        pesoEmOutroPlaneta.innerHTML = 'Seu peso em Mercúrio é ' + Number(pesoNaTerra.value) * 0.907 + ' N!';
    } else if (planetaEscolhido.value == stringJupiter.innerHTML) {
        pesoEmOutroPlaneta.innerHTML = 'Seu peso em Júpiter é ' + Number(pesoNaTerra.value) * 2.36 + ' N!';
    } else if (planetaEscolhido.value == stringSaturno.innerHTML) {
        pesoEmOutroPlaneta.innerHTML = 'Seu peso em Saturno é ' + Number(pesoNaTerra.value) * 0.916 + ' N!';
    } else {
        pesoEmOutroPlaneta.innerHTML = 'Você colocou um peso menor que 1 ou maior que 300! Coloque dentro dessa faixa, por favor.'
    }
}

botaoCalcularPeso.onclick = calcularPeso;
