// if (true) // esta instrucción lo que nos muestra es que que si se cumple la condición nos mostrara el mensaje que queremos enseñar y si por el contrario no se cumple no nos muestra nada en la pantalla de consola
// console.log("Campeones");

// let num1 = Number(prompt("Ingrese el número 1"));// Se le pide al usuario que ingrese el primer número para el condicional
// let num2 = Number(prompt("Ingrese el número 2"));// Se le pide al usuario que ingrese el segundo número para el condicional

// if (num1 >= num2) { // en esta parte se evalua la sentencia, pregunta si el primer número ingresado es mayor o igual al segundo número ingresado
//     console.log(`${num1} es mayor o igual a ${num2}`)// Si la sentencia resulta ser verdadera, nos mostrará en la consola de desarrollador el mensaje que queremos mostrar y termina sin necesidad de ejecutar la segunda parte de la sentencia
//  }
// else {
//     console.log(`${num2} es mayor que ${num1}`)//// Si la sentencia no resulta verdadera, nos mostrará en la consola de desarrollador el mensaje de la segunda parte de la sentencia que se ejecuta en casa de no ser verdadera
//  }

//  //IF anidados

//  if (num1 > num2) { // en esta parte se evalua la sentencia, pregunta si el primer número ingresado es mayor o igual al segundo número ingresado
//     console.log(`${num1} es mayor que ${num2}`)// Si la sentencia resulta ser verdadera, nos mostrará en la consola de desarrollador el mensaje que queremos mostrar y termina sin necesidad de ejecutar la segunda parte de la sentencia
//  }
// else {// al no cumplir la primera parte de la sentencia, evaluará la siguiente sentencia que hemos impuesto y la evalua como la anterior
//  if (num1 < num2 ){// en esta parte se evalua la sentencia, pregunta si el primer número ingresado menor al segundo número ingresado
//     console.log(`${num1} es menor que ${num2}`)// Si la sentencia resulta ser verdadera, nos mostrará en la consola de desarrollador el mensaje que queremos mostrar y termina sin necesidad de ejecutar la segunda parte de la sentencia termina sin necesidad de ejecutar lo demás del codigo
//  }
//  else{// al no cumplir parte de la sentencia, evaluará la siguiente sentencia que hemos impuesto y la evalua como la anterior
//     if(num1 = num2 ){// en esta parte se evalua la sentencia, pregunta si el primer número ingresado es igual al segundo número ingresado
//     console.log(`${num1} es igual que ${num2}`)// Si la sentencia resulta ser verdadera, entrará a evaluar la siguiente sentencia colocada haber si la cumple y de ser verdadera nos mostrará en la consola de desarrollador el mensaje que queremos mostrar y termina sin necesidad de ejecutar lo demás del codigo
//     }
//     else{// en esta parte como no se cumple ninguna sentencia antes impuesta nos mostrará el mensaje que en este caso es que Error
//         console.error(`Error en número ingresado`)
//     }
// }
// }

//Switch
let num = Number(prompt("Ingrese el número de 1 a 5, que desea conocer la tabla de multiplicar"));
   switch (num) {
      case 1: console.log(
     `1x1=1
      1x2=2
      1x3=3
      1x4=4
      1x5=5
      1x6=6
      1x7=7
      1x8=8
      1x9=9
      1x10=10`);
      break;
      case 2:console.log(
     `2x1=2
      2x2=4
      2x3=6
      2x4=8
      2x5=10
      2x6=12
      2x7=14
      2x8=16
      2x9=18
      2x10=20`);break;
      case 3: console.log(
     `3x1=3
      3x2=6
      3x3=9
      3x4=12
      3x5=15
      3x6=18
      3x7=21
      3x8=24
      3x9=27
      3x10=30`);
      case 4: console.log(
     `4x1=4
      4x2=8
      4x3=12
      4x4=16
      4x5=20
      4x6=24
      4x7=28
      4x8=32
      4x9=36
      4x10=40`);
      break;
      case 5:console.log(
     `5x1=5
      5x2=10
      5x3=15
      5x4=20
      5x5=25
      5x6=30
      5x7=35
      5x8=40
      5x9=45
      5x10=50`);break;
      default: console.error("No ingreso un número en el rango correcto");
      break; }