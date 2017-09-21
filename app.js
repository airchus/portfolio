// cogemos la libreria que hemos puesto como dependencia (dependency) en el package.json
var express = require('express');

var path = require('path');

// iniciamos Express
var app = express();

// esta linea hace que todo lo que haya en la carpeta public pueda ser servido
app.use('/static', express.static(path.join(__dirname, 'public')))

// enviamos Hello world en el PATH root '/'
app.get('/', function (req, res) {
  	// res.send('Hello World!');
  	res.sendFile(path.join(__dirname + '/index.html'));
});

// la aplicacion escucha en el puerto 3000
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});