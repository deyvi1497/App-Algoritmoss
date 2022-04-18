addEventListener('load', () => {
    main();
});
let numero = parseInt(prompt('Introduzca el numero a buscar:'));
function main() {
    let lista = [14, 97, 20, 96, 02, 29, 27, 10, 31,];
    if (Number.isInteger(numero)){


        /*let posicion = buscarNumero(lista, numero);  
        if (posicion >= 0) {
                console.log('El elemento ' + elemento + ' se encuentra en la posición ' + (posicion + 1));
            } else {
                console.log('El elemento ' + elemento + ' no se encontró.');
            }*/
            console.time("Tiempo de Busqueda Secuencial:");
            let posiciones = buscarTodasLasposicones(lista, numero);
            if (posiciones.length > 0) {
                //console.log(`El numero ${numero} ` + ' se encuentra en las posicion ' + posiciones.map((el) => el + 1));
                //console.log('Gracias por utilizar el metodo de busqueda Secuencial')
            } else {
                console.log(`El numero ${numero} no se encontró.`)
                console.log(`La lista es ${lista}`)
            }
    
    } else {
        console.error(`El numero ${numero} a buscar debe ser un número entero.`);
    }

   
}
function buscarTodasLasposicones(lista, numero) {
    let posiciones = [];
    for(let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            posiciones.push(i);
        }
    }
    console.timeEnd("Tiempo de Busqueda Secuencial:");
    return posiciones;
}

console.time("Tiempo de Busqueda Binaria:");
function BusquedaBinaria(lista, izquierda,derecha,valor){
    if (izquierda > derecha) 
    
    return console.log(`numero no encontrado en la lista. 

la lista es: ${lista}`);
    

    const posicion = Math.floor((izquierda + derecha) / 2);

    if(lista[posicion] == valor) 
    
    return console.log(`La posicion es: ${posicion}`);
    if(lista[posicion] < valor){

        return BusquedaBinaria(lista, posicion + 1, derecha, valor);

    }else{
        return BusquedaBinaria(lista, izquierda, posicion - 1, valor);
    }

}

const lista = [14, 97, 20, 96, 02, 29, 27, 10, 31,];
console.log(lista, 0, lista.length -1 ,numero);
console.timeEnd("Tiempo de Busqueda Binaria:");

{   console.time("Tiempo de Ordenamiento Burbuja:");
    function ordenamiento_burbuja(lista) {
        let cantn = lista.length - 1;
        let cambposicion;
    
        do {
            cambposicion = false;

            for(let n = 0; n < cantn; ++n) {
                if (lista[n] > lista[n + 1]) {
                    let valortemp = lista[n];
                    lista[n] = lista[n + 1];
                    lista[n + 1] = valortemp;
    
                    cambposicion = true;
                }
            }
    
            --cantn;
        } while (cambposicion);
    
        //return lista;
    }
    
    let lista = [14, 97, 20, 96, 02, 29, 27, 10, 31,];
    //console.log(`La lista es: ${lista}`);
    
    console.log();
    
    let resultado = ordenamiento_burbuja(lista);
    //console.log(`La lista ordenada es: ${resultado}`);
    console.timeEnd("Tiempo de Ordenamiento Burbuja:");

}

console.time("Tiempo de QuickSort:");
function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    var left = [];
    var right = [];
    var reboteIndex =Math.floor(arr.length / 2);
    var rebote = arr.splice(reboteIndex,1);
    for(var i = 0; i < arr.length;i++){
        if(arr[i] < rebote){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(rebote,quickSort(right));
}

var a = quickSort(lista);
//.log(`sorteo ${a}`);
console.timeEnd("Tiempo de QuickSort:");


console.time("Tiempo de Sorteo Insertion:");
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
      var currentValue = arr[i]
      var j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
  var t =insertionSort(lista);
  //Console.log(`insercion es : ${t}`);
  console.timeEnd("Tiempo de Sorteo Insertion:");
  











