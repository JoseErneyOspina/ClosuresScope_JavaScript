// Nuevo clousure
// Ver como podemos asignar valores
// ver como podemos reasignar nuevos elementos o construir nuevos elementos a partir de este mismo
// Y como van a recordar el valor que presentan según cada uno de los llamados que estamos haciendo

const buildCount = () => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
