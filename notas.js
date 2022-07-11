/* CLASE 2

Para acceder a los metodos o atributos de buna clase hay que crear una instancia de esa clase (objeto),
hay una forma para saltearse este medoto y es:

Static : Atributos y métodos estáticos en JS */

class Patito {
    static sonidito ="cuak!";
}
console.log(Patito.sonidito)
//cuak

class Patito {
    static hacerSonidito(){
        return "cuak!";
    }
};
console.log(Patito.hacerSonidito());
//cuak


const objetito ={
    name:"Juanito",
    email: "juanito@frijolitos.io",
    age: 18,
};
Object.keys(objetito);
//["name","email","age"]

Object.entries(objetito)
// 0: (2) ['name', 'Juanito']
// 1: (2) ['email', 'juanito@frijolitos.io']
// 2: (2) ['age', 18]

Object.getOwnPropertyDescriptors(objetito)
/* age: {value: 18, writable: true, enumerable: true, configurable: true}
email: {value: 'juanito@frijolitos.io', writable: true, enumerable: true, configurable: true}
name: {value: 'Juanito', writable: true, enumerable: true, configurable: true}
[[Prototype]]: Object */