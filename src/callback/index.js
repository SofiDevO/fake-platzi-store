function sum(num1, num2){
    return num1 + num2;
};


function calc (num1, num2, sumar){
    return sumar(num1, num2);
};

console.log(calc(2, 8, sum));

setTimeout(function (){
    console.log("Hola Javascript");
},5000);

function gretting(name){
    console.log(`Hola ${name}`);
};

setTimeout(gretting, 2000, 'Angela')