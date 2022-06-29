$(document).ready(function() {

	var dataRef = new Firebase('https://projetofinal-18b8e-default-rtdb.firebaseio.com/');
	dataRef.on('value', function(snapshot) {
		var t = snapshot.val();
        var count = 0;
        
		for (var key in t) {

			console.log(key);
			if(key === 'cards') {

				// document.querySelector('#bloco-eventos-article').html( '' );

				if (t.hasOwnProperty(key)) {	
					var _item = t[key];
					console.log(_item);
					var _itemsKey = Object.entries(_item);
	
					for (const [key2, value2] of _itemsKey) {
						console.log(key2, value2);

						

						console.log(value2.titulo)
						console.log(value2.texto)

						var newId = 'conteudo'+count;
						var clone = document.querySelector('#conteudo-clone').cloneNode( true );
						clone.setAttribute('id', newId);
							
						//var img_url = clone.getElementsByClassName("img_url")[0];
						//img_url.setAttribute("src", value2.img_url);

						var titulo = clone.getElementsByClassName("titulo")[0];
						titulo.textContent = value2.titulo;

						var texto = clone.getElementsByClassName("texto")[0];
						texto.textContent = value2.texto;

	


						document.querySelector('#conteudo-clone').appendChild( clone );

					}	  
				}
			}
		}

	});

});