 
let valores=[12,13,14,9,10]
 
/*console.log(valores)
console.log(valores[0])//Na posição zero
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])*/


/*for(let pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem ${valores[pos]}  valores `)
}*/
//console.log(valores.length)Indica quantos  valores tem o array lembrando que começa do 1
//Para o indice ou posições o javascript conta do zero adiante

//Vamos usar um metódo especial 
/*for( let pos in valores){
    console.log(`A posição ${pos} tem ${valores[pos]} valores`)
}*/

//Um metodo muito usado para procurar valores dentro de um array é o indexOf.

//Com isto podemos ver se o número que usamos através do indexOf está em que posição

let pos=valores.indexOf(53)

 

if(pos==-1){
    console.log(` Valor não encontrado `)
}else{
    console.log(`O valor está ${pos} posição`)
}

   