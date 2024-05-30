/* let votos = [];

function votar (candidato){
votos.push(candidato)

}

function contarVotos() {

  let conteo = {};
  for (let i = 0; i < votos.length; i++) {
    let voto = votos[i];
    if(conteo[voto] === undefined){
      conteo[voto]= 1;
    }else{
      conteo[voto]++;
    }
    
  }
  return conteo;

  
}
  
votar("Candidato 1");
votar("Candidato 2");
votar("Candidato 1");
votar("Candidato 3");
votar("Candidato 2");

console.log(contarVotos()); */

// let i = 0;

// while (i<5) {
//   console.log(i);
//   i++
// }

// let contador= 0;

// while (contador < 5){
//   console.log("El contador es: " + contador);
//   contador++
// }

for (let i = 0; i < 5; i++ ){
  console.log("El valor de i es: " + i);
}