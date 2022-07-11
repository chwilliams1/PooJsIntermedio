const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],

    addCourse(newCourse){
        console.log("this", this);
        console.log("this.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

/*
console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan)); */

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan,"pruebaNASA",{
    value: "extraterrestres",
    enumareble: true,
    writable: true,
    configurable: true,
});

console.log(Object.getOwnPropertyDescriptors(juan));