// //Prompt para obtener nombre
// let nombre = prompt('Hola! Cual es tu nombre?')
// //-
// //Prompt para continuar en la pagina
// let respuesta = prompt(`Bienvenido ${nombre}!
// Quieres conocer lo que puedes hacer en esta pagina?
// (Responde con el numero indicado)
// 1-Si
// 2-No`);


// //Creacion de funcion de seleccion de herramientas
// function herramientas(a) {
//   if (a == 1) {
//                 let respuestaHerramienta = prompt(`Perfecto!
//                 En esta pagina te ofrece las siguientes herramientas
//                 1- Reconocer una palabra palindromo
//                 2- Obtener cantidad de caracteres y palabras de cualquier texto
//                 3- Sumar 2 numeros enteros
//                 ingresa el numero correspondiente
//                 a la herramienta que quieras utilizar`
//                 )


//                 if (respuestaHerramienta == 1){ 

//                       let palabra = prompt(`Has seleccionado la herramienta 1 (Palindromo). Ingresa la palabra a analizar...`)
//                       palindromo(palabra);
//                 }
//                 else if (respuestaHerramienta == 2){
//                       let texto = prompt(`Has seleccionado la herramienta 2 (Analizar texto). Ingresa el texto a analizar...`)
//                       analizarTexto(texto)
//                 }
//                 else if (respuestaHerramienta == 3) {
//                       let num1 = prompt(`Has seleccionado la herramienta 3. (Sumatoria) Escribe el primer numero a sumar...`)
//                       let num2 = prompt(`Perfecto! ahora ingresa el siguiente numero a sumar...`)

//                       sumar(num1, num2);

//                     }
// } else if (a == 2) {

//     alert(`Ok! Esperamos verte pronto!`)

// } else {

//     alert(`Por favor, ingresa '1' para 'Si' ó '2' para 'No'`)

// }

// }


// herramientas(respuesta)


// //Funcion para herramienta palindromo
// function palindromo(str) {
//   let reversa = str.split('').reverse().join('')

//   if (reversa.toLowerCase() == str.toLowerCase()) {
//     alert(`ingresaste un palindromo`)
//   }
//   else {
//     alert(`Esa palabra no es palindromo`)
//   }
// }


// //Funcion para herramienta sumar

// function sumar(a, b) {
//   let sumatoria = parseInt(a) + parseInt(b);
//   alert(`La suma de ${a} y ${b} es: ${sumatoria}`)
// }

// //Funcion para herramienta Analizar texto
// function analizarTexto(str) {
//   let cantidadCaracteres = str.split('');
//   let cantidadPalabras = str.split(' ');
//   let cantidadLetras = 0;

//   for (let i = 0; i < cantidadCaracteres.length; i++){
//     if (cantidadCaracteres[i] !== ' ') {
//       cantidadLetras++
//     }else continue
//   }

//   let resultado = {
//     caracteres: cantidadCaracteres.length,
//     letras: cantidadLetras,
//     palabras: cantidadPalabras.length
//   }

//         alert(`El texto que ingresaste, tiene ${resultado.caracteres} caracteres, ${resultado.letras} letras y ${resultado.palabras} palabras.`)
// }
