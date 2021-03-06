import Auto from "./Auto";
import AutoCarrera from "./AutoCarrera";

console.log("Creando Auto");
let miAuto: Auto = new Auto("Fiat", "Palio");
console.log(miAuto);
console.log("\nAcelerando Auto");
miAuto.acelerar();
console.log(miAuto);
console.log("");

let miAutoDeCarrera: AutoCarrera = new AutoCarrera("Ford", "Fiesta", 10);
console.log("Creando Auto de Carrera");
console.log(miAutoDeCarrera);
console.log("\nAcelerando Auto de Carrera");
miAutoDeCarrera.acelerar();
console.log(miAutoDeCarrera);
console.log("\nAgregando Sponsor");
miAutoDeCarrera.agregarSponsor("Shell");
console.log(miAutoDeCarrera);
console.log("\nAgregando Sponsor");
miAutoDeCarrera.agregarSponsor("Mercado Tito");
console.log(miAutoDeCarrera);
console.log("\nAgregando Sponsor repetido");
miAutoDeCarrera.agregarSponsor("Mercado Tito");
console.log(miAutoDeCarrera);
console.log("\nEliminando Sponsor");
miAutoDeCarrera.eliminarSponsor("Mercado Tito");
console.log(miAutoDeCarrera);
console.log("\nEliminando Sponsor que no existe");
miAutoDeCarrera.eliminarSponsor("Mercado Tito");
console.log(miAutoDeCarrera);
console.log("\ncambiando numero de Competencia");
miAutoDeCarrera.cambiarNumeroCompetencia(15);
console.log(miAutoDeCarrera);
