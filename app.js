// Require de Express
const express = require ('express');

const todasLasRutas = require('./routes/index.js');


// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

app.get('/', todasLasRutas.home);
app.get('/heroes', todasLasRutas.heroes);
app.get('/heroes/detalle/:id', todasLasRutas.heroesDetalle);
app.get('/heroes/bio/:id/:ok?', todasLasRutas.heroesBio);
app.get('/creditos', todasLasRutas.creditos);

