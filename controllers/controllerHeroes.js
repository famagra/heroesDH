const fs = require('fs');

const heroes = JSON.parse(fs.readFileSync('C:/Users/famagra/Desktop/DH-FullStack/IntegradoresDH/07-heroes/data/heroes.json'));


const controllerHeroes = {

    heroes: (req,res) => {
    
        res.send(heroes)
    },

    heroesDetalles: (req,res) => {
    
        let heroeID = heroes.find(heroe => {
            return heroe.id == req.params.id;
        })
        if(heroeID == null ){
            res.send(`no existe heroes con el id numero ${req.params.id}`)
        }
        res.send(`Hola, mi nombre es ${heroeID.nombre} y soy
        PROFESION ${heroeID.profesion}`);
    },

    heroesBio: (req,res) => {
        let hereoOK = req.params.ok;
        let heroeID = heroes.find(heroe => {
            return heroe.id == req.params.id;
        })
        if(heroeID == null ){
            res.send(`no existe heroes con el id numero ${req.params.id}`)
        }
        if(hereoOK == null){
            res.send(`HOLA, mi nombre es ${heroeID.nombre}, Lamento que no desees saber más de mi :(`);
        }
        if(hereoOK == "ok"){
            res.send(`${heroeID.nombre} ${heroeID.resenia}`);
       }
    }
}

module.exports = controllerHeroes;