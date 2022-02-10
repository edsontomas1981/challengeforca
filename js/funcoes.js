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