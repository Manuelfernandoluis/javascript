
//Recursividade
function fatorial(n){
    if(n==1){
        return 1
    }else{
        return  n* fatorial(n-1)
    }

}

//console.log(fatorial(5))

/*Normalmente o fatorial de um número refere-se
ex 5! 5x4,5x3,5x2,5x1

ex n! nx(n-1)! normalmente o fatorial de um número é ele mesmo x o mesmo-1

A não que seja 1 porque matematicamente o fatorial de 1 é 1
Eles podem funcionar de maneira recursiva e de maneira tradicional*/

/*
function parimpar(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

console.log(parimpar(9))*/

/*function calcular(n=0,m=0){
    
   return n*m
}*/



//Podemos colocar uma função dentro de uma variavel
let num =function(n){
    return n*7
}

console.log(num(10))