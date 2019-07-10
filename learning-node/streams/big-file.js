const fs = require("fs");
const file = fs.createWriteStream("./big");

for (let i = 0; i <= 1e6; i++) {
  file.write(
    "Estaba la pájara pinta sentada en un verde limón. Con el pico cortaba la rama, con la rama cortaba la flor. Ay, ay, ay! Cuándo vendrá mi amor... Me arrodillo a los pies de mi amante, me levanto constante, constante. Dame la mano, dame la otra, dame un besito sobre la boca. Daré la media vuelta,  Daré la vuelta entera, Con un pasito atrás,  Haciendo la reverencia. Pero no, pero no, pero no, porque me da vergüenza, pero sí, pero sí, pero sí, porque te quiero a ti."
  );
}

file.end();
