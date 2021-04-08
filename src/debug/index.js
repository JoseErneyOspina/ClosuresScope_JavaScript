var a = 'Hello';
function hello() {
    let b = 'Hello World';
    const c = 'Hello World';
    if (true) {
        let d = 'Hello World';
        debugger
    }
}
hello();


// Otro
const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}
let myMoneyBox = moneyBox();
myMoneyBox(4); //4
myMoneyBox(6);  //4+6= 10
myMoneyBox(10); //4+6+10= 20