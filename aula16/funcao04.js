
//Para calcular o fatorial de um número por exemplo é como dizer 5! 5x4xx3x2x1=120

function fatorial(n){
let fat=1
for(let c=n;c>1;c-- ){
    fat *=c
}
return fat
}

console.log(fatorial(5))