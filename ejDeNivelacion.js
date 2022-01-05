// `1. Loop de pares
// Debés crear una función llamada loopDePares que reciba como parámetro un número 
//y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, 
//mostrá en la consola “El número x es par”.`

// let loopDePares = (x) => {
    
//     for (let i = 0; i <= 100; i++) {
//         console.log(`El numero de loop es ${i}`);
//         if ((i+x)%2==0) {
//             console.log(`El numero ${i+x} es par`);
//         }        
//     }
// }

// loopDePares(10)


// 2. Loop de impares con palabra
// Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra 
// y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por 
// parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

// let loopDeImpares= (y, z) => {
    
// for (let i = 0; i <= 100; i++) {
//     console.log(`El numero de loop es ${i}`);
//     if ((i+y)%2==1) {
//         console.log(`El numero es${(i+y)} y la palabra es ${z}`);
//     }
// }
// }

// loopDeImpares(2, 'hola') 


// 3. Sumatoria
// 	Debés crear una función llamada `sumattion` que reciba un número como parámetro 
// y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

// Ejemplo: 
// sumattion(3) debe retornar 6 porque hace (1 +2 +3)
// sumattion(8) debe retornar 36

// let sumattion =(a)=>{
    
//     let sum=0;
//     let array =[]
//     for (let i = 0; i <= a; i++) {
//         array.push(i)
//         sum+=i

//     }
//     return console.log(array,sum);
// }

// sumattion(8)

// 4. Callback
// Debes crear una Función llamada callback que reciba como Parámetros un número y una Función. 
// Esta deberá retornar el resultado de esa función pasándole como argumento el número que llega 
// por parámetro.

// Ejemplo:
// callback(5, (num)=>{return num*10}) debe retornar 50
// callback(25, (num)=>{return num/5}) debe retornar 5

// let callback =  (x, call)=>{
//     call(x)
// } 

// callback(25,(dividir=>{console.log(dividir/5)}))



// 5. Nuevo Arreglo

// Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro 
// y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

// Ejemplo: 
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]


// let nuevoArreglo =(x)=>{
//     let array = [];
//     for (let i = 0; i < x; i++) {
//         array.push(i+1);
//     }
//     console.log(array);
// }

// nuevoArreglo(3)


// 6. Similar String.split()
// Debés crear una función llamada `split` que reciba un `string` y 
// simule el comportamiento de la función original Si no sabés cómo funciona,
//  Google puede ayudarte..

// Importante: No podés usar el String.split()

// Ejemplo: 
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

// let split =(x)=>{
//     let arr= Array.from(x)
//     console.log(arr);
// }
// console.log(split('try me!'));


// 7. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro 
// y devuelva sus caracteres del medio.

// Ejemplo: 
// middleCharacter(“plataforma5”) debe retornar “f”
// middleCharacter(“hola”) debe retornar “ol”
// middleCharacter(“cosas”) debe retornar “s”

// let middleCharacter =(x)=>{
//     let y= x.length
//     let z = Math.floor(y/2)
//     if ((y+1)%2==0) {
//         console.log(x[z])
//     }else if ((y+1)%2==1){
//         let slice= x.slice((z-1),z+1)
//         console.log(slice);
//     }
// }

// middleCharacter('probar')


// 8. Mover ceros a lo último
// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro 
// y devuelva otro con los números `0` ordenados al final.

// Ejemplo: 
// moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

// let moveZeros = (x)=>{
// let y = x.filter((a)=>a!==0)
// let z = x.filter((a)=>a===0)
// z.unshift(y);
// console.log(z);
// }

// console.log(moveZeros([1,0,0,0,0,0,0,0,true]));

// 9. Manejando dos arreglos
// Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo 
// como parámetros y muestre en la consola “Soy {elemento de array 1} y yo 
// soy {elemento de array 2}”.

// Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

// let arrayHandler = (x,y)=>{
    
//     for (let i = 0; i < x.length; i++) {
//         console.log(`Soy ${x[i]} y yo soy ${y[i]}`);
    
// }
// console.log(x,y) 
// }
// console.log(arrayHandler(['h','o','l','a'],[1,2,3,4]));


// 10. Mezclando arreglos
// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros 
// y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

// Ejemplo: 
// mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
// mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
// mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]


// let mezclarArreglos = (x,y)=>{
//     let arr=[]
//     for (let i = 0; i < x.length; i++) {
//         console.log(`${x[i]}  ${y[i]}`);
//         arr.push(x[i],y[i]);
//         console.log(arr);
// }
// console.log(arr) 
// return arr;
// }
// console.log(mezclarArreglos(['h','o','l','a'],[1,2,3,4]));


// 11. Arreglos
// Investiga los siguientes métodos de los arreglos y replica su funcionamiento de manera 
// lógica al igual que lo hiciste en el ejercicio número 5: 
// 1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
// 2. “pop([1,2,3,4,5])” debe retornar 5
// 3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
// 4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]
    
    // let join = [1,2,3,4,5]
    // console.log(join.join(' '))

    // let pop = [1,2,3,4,5]
    // console.log(pop.pop());
 
    // let filter = [1,2,3,4,5]
    // console.log(filter.filter((e)=>{return e%2===0}));
    
    // let map = [1,2,3,4,5]
    // console.log(map.map((e)=>{return e*10}));

// 12. Mínima Suma
// Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  
// y devuelva la suma entre los dos números más chicos.
    
// Ejemplo: 
// minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
// minSum([1, 10, 43, 900, 20, 8]) debe retornar 9

// let minSum =(x)=>{
    
//         let y = [...new Set(x)] 
//         let num1 = Math.min(...y)
//         y.splice(y.indexOf(num1),1)
//         let num2 = Math.min(...y)
//         return num1+num2
        
    
// }


// console.log(minSum([7,6,5,4,3,2,1,3]));



// 13. Arreglo de objetos
// Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro 
// y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el
//  valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]

let arregloDeObjetos = (x)=>{
    let a =[]
    for (let i = 1; i = x; i++) {
        let y = {valor: i}
        a.push(y)

    }

}

arregloDeObjetos(5)
