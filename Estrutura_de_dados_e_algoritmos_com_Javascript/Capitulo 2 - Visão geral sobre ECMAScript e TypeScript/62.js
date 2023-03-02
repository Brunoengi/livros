//Palavra reservada set e get para POO

class Person{
    constructor(name){
        this.name = name
    }
    getNome(){
        return this.name
    }
}

let Pessoa1 = new Person('Bruno')

console.log(Pessoa1)
console.log(Pessoa1.name)
console.log(Pessoa1.getNome())

