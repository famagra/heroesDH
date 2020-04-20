const rutasHome = require('./home');
const rutasHeroes = require('./heroes');
const rutasHeroesDetalle = require('./heroesDetalle')
const rutasHeroesDetalleBio = require('./heroesDetalleBio');
const rutasCreditos = require('./creditos');


module.exports ={
    home : rutasHome,
    heroes : rutasHeroes,
    heroesDetalle : rutasHeroesDetalle,
    heroesBio : rutasHeroesDetalleBio,
    creditos : rutasCreditos
}