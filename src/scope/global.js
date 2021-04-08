var hello = 'hello';
let world = 'Hello world';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

// Mala practica 1
const helloWorld = () => {
    globalVar = 'Im global';
}
helloWorld();
console.log(globalVar);
// Mala practica 2
const anotherFunction2 = () => {
    var localVar = globalVar = 'Im Global';
}
console.log(globalVar);