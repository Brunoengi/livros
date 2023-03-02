//escopo

var numero = 5
trocarNumero()

function trocarNumero(){
    let numero = 3 //let e var tem o escopo local quando encapsulados pela função
    // numero = 3 tem escpo global
}

console.log(numero)
