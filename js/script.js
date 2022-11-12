function confirmacion() {
	var pregunta = confirm("¿Deseas visitar Google?")
	if (pregunta){
		alert("Te envío allí rápidamente")
		window.location = "https://www.google.com";
	}
	else{
		alert("Quizás en otro momento...\n Gracias de todas formas")
	}
}