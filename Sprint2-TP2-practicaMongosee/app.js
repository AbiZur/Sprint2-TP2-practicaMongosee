//conexión con usuario del Grupo 02

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://grupo-02:grupo02@cursadanodejs.ls9ii.mongodb.net/Node-js"
  )

  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((error) => console.log("Error al conectar a MongoDB", error));

// ESQUEMA PARA SUPERHEROES
//se define esquema y modelo en Mongoose para estructurar la colección en la bbdd

const superheroSchema = new mongoose.Schema(
  {
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String,
  },
  { collection: "Grupo-02" }
);

const SuperHero = mongoose.model("SuperHero", superheroSchema);

//Método 1: INSERTAR -> .save

async function insertSuperHero() {
  const hero = new SuperHero({
    nombreSuperHeroe: "Capitán Mala Paka",
    nombreReal: "Leo Mareo",
    edad: 2,
    planetaOrigen: "Isla del Tesoro Olvidado",
    debilidad: "El cambio de pañal inesperado",
    poderes: [
      "Rastreo infalible de tesoros (biberones y chupetes de oro)",
      "sigilo( puede moverse sin despertar a nadie)",
    ],
    aliados: [
      "El Pulpo Mordelón (un peluche con múltiples tentáculos que ayuda a recuperar tesoros robados)",
    ],
    enemigos: ["El Barón del Insomnio "],
    creador: "Debora Zurita",
  });

  await hero.save(); //await:espera que termine la operación antes de seguir con el resto del código. Solo se puede usar awaitdentro de una función async(asíncrona)
  console.log("Nuevo Superhéoe insertado:", hero);
}

insertSuperHero();



//Método 2: ACTUALIZAR -> .updateOne

/*
async function updateSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.updateOne(
    { nombreSuperHeroe: nombreSuperHeroe },
    { $set: { edad: 3 } }
  );
  console.log("Resultado de la actualización:", result);
}

updateSuperHero("Capitán Mala Paka");
*/


//Método 3: ELIMINAR -> .deleteOne
/*
async function deleteSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.deleteOne({
    nombreSuperHeroe: nombreSuperHeroe,
  });
  console.log("Superhéroe eliminado:", result);
}

deleteSuperHero("Capitán Mala Paka");
*/


//Método 4: BUSCAR -> .find
/*
async function findSuperHeroes(){
  const heroes = await SuperHero.find({planetaOrigen: 'Tierra'});
  console.log('Superhéroes encontrados:', heroes);
}

findSuperHeroes();
*/