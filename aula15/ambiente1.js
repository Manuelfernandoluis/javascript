let valores=[8,1,7,4,2,9]
 

/*
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/

/*Fazer de uma forma mais inteligente de se trabalhar
for(let pos=0; pos<valores.length;pos++){
    console.log(`A posição ${pos} tem ${valores[pos]} valores`)
}*/

//Vamos usar um metodo especial para usar com array 

/*
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

let pos=valores.indexOf(8)

if(pos==-1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}

