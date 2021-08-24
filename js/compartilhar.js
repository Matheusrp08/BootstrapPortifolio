function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Matheus de Pádua -Desenvolvedor',
			text: 'Desenvolvedor WEB',
			url: '',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}