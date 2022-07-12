// const juan = {
//     name: "Juanito",
//     age: 18,
//     approvedCourses: ["Curso 1"],

//     addCourse(newCourse){
//         console.log("this", this);
//         console.log("this.approvedCourses", this.approvedCourses);
//         this.approvedCourses.push(newCourse);
//     }
// };

// /*
// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan)); 

// console.log(Object.getOwnPropertyDescriptors(juan));
// */




// Object.defineProperty(juan, "pruebaNasa",{
    
//     value: "extraterrestres",
//     //Enumareble false, oculta el elemento prueba nasa del console.log y Object.keys. no asi Object.getelementbyname
//     enumerable:false,
//     //Writable, indica si se puede modificar el valor del objeto
//     writable:false,
//     //Configurable, indica si se puede eliminar el valor del objeto
//     configurable:false,
// });

// Object.defineProperty(juan, "navigator",{
//     value: "Chrome",
//     enumerable:false,
//     writable:true,
//     configurable:true,
// });

// Object.defineProperty(juan, "editor",{
//     value: "VSCode",
//     enumerable:true,
//     writable:false,
//     configurable:true,
// });
// Object.defineProperty(juan, "terminal",{
//     value: "WSL",
//     enumerable:true,
//     writable:true,
//     configurable:false,
// });

// Object.seal(juan); //No se puede eliminar niun valor del objeto

// Object.freeze(juan); //No se pueden editar todos los valores de juan
// console.log(Object.getOwnPropertyDescriptors(juan));

// function recursiva(){
//     if(/*validaci[on */){
//         //llamados recursivos
//     }else{
//         //llamados normales, sin recursividad
//     }
// }

//  const numeritos =[0,1,2,3,4,5,6,7,8,9,10,123123,2,3,45,1];
// // let numerito =0;
// // for (let index =0;index<numeritos.length; index++){
// //     numerito = numeritos[index];
// //     console.log({index, numerito});
// // }

// function recursiva(numbersArray){
//     if (numbersArray.length !=0){
//         const firstNum =numbersArray[0];
//         console.log(firstNum);
//         numbersArray.shift();
//         return recursiva(numbersArray);
//     }else{

//     }
// }
