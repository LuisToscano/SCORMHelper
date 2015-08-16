function reproducirAudio(sym, numeroAudio, cantidadDeAudios){
	
if (sym.getSymbol("audio_"+numeroAudio).$("audiomp3_"+numeroAudio)[0].paused) {
	sym.getSymbol("audio_"+numeroAudio).play("play");

	for(var i=1; i<=cantidadDeAudios; i++){
		if(typeof sym.getSymbol("audio_"+i) != 'undefined'){
				if(i!=numeroAudio){
					sym.getSymbol("audio_"+i).play("play");
					sym.getSymbol("audio_"+i).play("stop");
				}
			}else{
			console.log("el audio "+i+" no existe.");
			}
	}
} else {
	sym.getSymbol("audio_"+numeroAudio).play("stop");
}
}

