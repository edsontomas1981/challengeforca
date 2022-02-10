var palavras = {'palavras':[{"dica":"É um sentimento","palavra":"AMOR"},{"dica":"É um sentimento","palavra":"SAUDADE"},{"dica":"É uma profissão","palavra":"MEDICO"},{"dica":"É uma profissão","palavra":"ENGENHEIRO"},{"dica":"É uma profissão","palavra":"ADVOGADO"},{"dica":"É uma profissão","palavra":"MOTORISTA"},{"dica":"É uma profissão","palavra":"POLICIAL"},{"dica":"É uma profissão","palavra":"PROGRAMADOR"},{"dica":"É uma profissão","palavra":"DESENVOLVEDOR"},{"dica":"É um animal","palavra":"CACHORRO"},{"dica":"É um animal","palavra":"URSO"},{"dica":"É um animal","palavra":"PAPAGAIO"},{"dica":"É um animal","palavra":"GATO"},{"dica":"É um animal","palavra":"AGUIA"},{"dica":"um animal","palavra":"PORCO"},{"dica":"É um objeto","palavra":"FACA"},{"dica":"É um objeto","palavra":"CANETA"},{"dica":"É um objeto","palavra":"BEBEDOURO"},{"dica":"É um objeto","palavra":"CADEIRA"},{"dica":"É um objeto","palavra":"BEBEDOURO"},{"dica":"É um objeto","palavra":"VIOLÃO"}]}
var tela = document
var enigmaForca = document.querySelector('.palForca')
var palavra = sorteiaPalavras();
var dica = document.querySelector('.dica')
var palpitesCertos = document.querySelector('.letracerta')
var palpitesErrados = document.querySelector('.letraerrada')
var listaForca = []
var spanEnigma = []
var erros = 0

function montaForca(){
	listaForca = palavra['palavra'].split('');
	dica.textContent = palavra['dica'];
	var caracterSecreto = ''
	for (var i = 0; i < listaForca.length; i++) {
		spanEnigma[i] = '_'		
	}
	for (var i = 0; i < listaForca.length; i++) {
		var enigmaForca = document.querySelector('.palForca')
		caracterSecreto = caracterSecreto + '_ ' 
	}
	enigmaForca.textContent = caracterSecreto
}

window.addEventListener('load', function(){
		montaForca()	
})

tela.addEventListener("keypress",function(evento){
	var teclaPressionada = evento.key.toUpperCase()
	temLetraNaPalavra(teclaPressionada)
	acertou()
})

function temLetraNaPalavra(caracter){
	var acertouLetra = false;
	
	for (var i = 0; i < listaForca.length; i++) {
		if (listaForca[i] == caracter){
			spanEnigma[i] = caracter
			acertouLetra = true
		}
	}
	if (acertouLetra){
		enigmaForca.textContent = spanEnigma.toString().replace(/,/g,' ')
		palpitesCertos.textContent = palpitesCertos.textContent + caracter
	}else{
		palpitesErrados.textContent = palpitesErrados.textContent + caracter
		erros = erros + 1
		console.log(erros)
		if (erros == 1){
		desenhaCabeca()
		}else{
			if(erros == 2){
				desenhaCorpo();
			}
			if(erros == 3){
				desenhaBracoDir();
			}
			if(erros == 4){
				desenhaBracoEsq();
			}
			if(erros == 5){
				desenhaPernaDir();
			}
			if(erros == 6){
				desenhaPernaEsq();
				alert ('Você perdeu !!')
				var novoJogo = continuaJogo()
				if (novoJogo){
					document.location.reload(true)
				}
			}
		}
	}

}
function geraNumAleatorio(max) {
  return Math.random()*max;
}
function sorteiaPalavras(){
	var num = parseInt(geraNumAleatorio(palavras['palavras'].length))
  	var resposta = palavras['palavras'][num]
	return resposta
}
function continuaJogo(){
	continua = window.confirm("Deseja iniciar um novo jogo ? ")
	return continua 
}
function acertou(){
	var	palpites = spanEnigma.toString().replace(/,/g,'')
	var	enigma = palavra['palavra']
	
	if (palpites == enigma){
		enigmaForca.textContent = spanEnigma.toString().replace(/,/g,' ')	
		alert ('Parabéns você ganhou !!!! ')
		var novoJogo = continuaJogo()
		if (novoJogo){
				document.location.reload(true)
		}
	}
}