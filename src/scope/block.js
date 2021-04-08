const fruits = () => {
    if(true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';

        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

// Otro ejemplo
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

//Mismo ejemplo anterior pero con var
var y = 1;
{
    var y = 2;
    console.log(x);
}
console.log(x);

// Otro ejemplo
const anotherFunction = () => {
    for(var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}
// Mismo ejemplo pero con let
const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}