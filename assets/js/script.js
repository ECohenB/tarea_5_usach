function suma_notas() {
  let notas = [6, 8, 9, 2, 5, 10]
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  console.log("La suma de las notas es: " + suma);
}
suma_notas();

function promedio() {
  let notas = [6, 8, 9, 2, 5, 10]

  let promedio = 0;
  for (let i = 0; i < notas.length; i++) {
    promedio += notas[i];
  }
  console.log("El promedio final es: " + promedio / notas.length);
}

promedio();

window.alert("Bienvenido a mi sitio web");