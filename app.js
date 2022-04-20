
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
// declaramos una funcion con el mismo nombre "formEuroToDollar"
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = function(valueInDollar){
    
    let valueInYen = valueInDollar * 127.9;
    
    return valueInYen;
} 
const fromYenToPound = function(valueInYen){
    
    let valueInPound = valueInYen * 0.8;
    
    return valueInPound;
} 

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
} 


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

