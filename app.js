// For crea un bucle que sirve para iterar sobre una secuende de valores por ejemplo


 for (let i = 0; i < 50; i++) {  
      // console.log(i)
}

// ForEach es un metodo que se sirve para recorrer una matriz y realizar una operacion en sus elementos.
const nombres = ['anderson','juan','marcos','maria']
nombres.forEach(nombres => console.log(nombres))

//Map se utiliza para crear nuevos arrays con los resultados de una array original

const personas = ['anderson','juan','marcos','maria']

const personasMayus = personas.map(persona => persona.toUpperCase()) // aqui pones los nombres en mayuscula en un nuevo array
console.log(personasMayus)

// Metodos de array para manipular 
//push - metodo para agregar elemento de n a mas

const fruta = ['manzana','platano','naranja']
fruta.push('zandia')
console.log(fruta)
//pop - metodo para eliminar el ultimo elemento del arrays
const colores= ['amarillo','rojo','verde']
const ultumocolores= colores.pop()
console.log(colores)
console.log(colores)
//shift - elimina el primer elemento de un array
const apellidos = ['azabache','sanchez','gomez']
const primerapellidots = apellidos.shift()
console.log(apellidos)
console.log(primerapellidots)

//unshift - Este metodo nos ayuda inserta elementos al inicio del array 

const number = [1,2,3,4,5,6]
const agregarnumero = number.unshift(0,2)
console.log(number)
console.log(agregarnumero)