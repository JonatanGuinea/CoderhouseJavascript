

//Funcioón para verificar si una cadena es un palindromo
function palindromo(str) {
  let reversa = str.split('').reverse().join('');

  if (reversa.toLowerCase() == str.toLowerCase()) {
    
    document.getElementById('resultado-palabra-palindromo').innerText = `Ingresaste un palíndromo`;
  } else {
  
    document.getElementById('resultado-palabra-palindromo').innerText = 'Esa palabra no es palíndromo';
  }

  // Guardar la palabra en el localStorage
  localStorage.setItem('palabraPalindromo', str);
}

// Accion para el boton de analizar palíndromo
document.getElementById('boton-analizar-palindromo').addEventListener("click", function() {
  let palabra = document.getElementById('palabra').value;
  palindromo(palabra);
});

// Función para sumar dos numeros enteros
function sumar(a, b) {
  let sumatoria = parseInt(a) + parseInt(b);

  document.getElementById('resultado-sumar').innerText = `La suma de ${a} y ${b} es: ${sumatoria}`;

  localStorage.setItem('primerNumeroSumar', a);
  localStorage.setItem('segundoNumeroSumar', b);
}

// accion para el botón de sumar
document.getElementById('boton-sumar').addEventListener("click", function() {
  let primerNumero = document.getElementById('primer-numero').value;
  let segundoNumero = document.getElementById('segundo-numero').value;
  sumar(primerNumero, segundoNumero);
});

// Función para analizar un texto y contar caracteres, palabras y letras
function analizarTexto(str) {
  let cantidadCaracteres = str.split('');
  let cantidadPalabras = str.split(' ');
  let cantidadLetras = 0;

  for (let i = 0; i < cantidadCaracteres.length; i++) {
    if (cantidadCaracteres[i] !== ' ') {
      cantidadLetras++
    } else continue
  }

  let resultado = {
    caracteres: cantidadCaracteres.length,
    letras: cantidadLetras,
    palabras: cantidadPalabras.length
  }

  document.getElementById('resultado-analizar-texto').innerText = `El texto que ingresaste tiene ${resultado.caracteres} caracteres, ${resultado.letras} letras y ${resultado.palabras} palabras.`;

  localStorage.setItem('textoAnalizar', str);
}

// accion para el botón de analizar texto
document.getElementById('boton-analizar-texto').addEventListener("click", function() {
  let texto = document.getElementById('texto').value;
  analizarTexto(texto);
});


// Recuperar la información del localStorage cuando la página se carga
window.addEventListener("load", function() {

  let palabraPalindromo = localStorage.getItem('palabraPalindromo');
  if (palabraPalindromo) {
    document.getElementById('palabra').value = palabraPalindromo;
  }


  let primerNumeroSumar = localStorage.getItem('primerNumeroSumar');
  if (primerNumeroSumar) {
    document.getElementById('primer-numero').value = primerNumeroSumar;
  }


  let segundoNumeroSumar = localStorage.getItem('segundoNumeroSumar');
  if (segundoNumeroSumar) {
    document.getElementById('segundo-numero').value = segundoNumeroSumar;
  }

  
  let textoAnalizar = localStorage.getItem('textoAnalizar');
  if (textoAnalizar) {
    document.getElementById('texto').value = textoAnalizar;
  }
});
