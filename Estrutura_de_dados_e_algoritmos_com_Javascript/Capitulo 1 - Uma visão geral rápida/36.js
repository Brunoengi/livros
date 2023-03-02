//Comportamento da linguagem ao atribuir true e false com relação ao valor da variável

const texto = 'um texto'
const numero = 5
const objVazio = []
const objPreenchido = [3,2,1]
const stringVazia = ''

function verificarTrueFalse(...all){
    console.log(all)
    all.forEach((el)=>{
        if(el){
            console.log(el)
        }
    })
}

verificarTrueFalse(texto, numero, objVazio, objPreenchido, stringVazia)