 
let num=document.querySelector('input#fnum') //Formulário para o número, nesse caso input#fnum

let lista=document.querySelector('select#flista') //id do select#flista

let res=document.querySelector('div#res') //id do res
let valores=[] //vectores onde serão armazenadas os valores 

//Para fazer a adição dos valores precisamos de duas funções 

// Função 1Adicionamos n, que é uma nova varivel
function isNumero(n){
   //Na condição Se que criamos a variavel n e convertemos para número
   if(Number(n)>=1 && Number(n)<=100){
      return true //Vai retornar verdadeiro se ele for maior que 1 e menor 100
   }else{
      return false //Caso ao contrário ele retornar falso
   }

}


//Função 2 n também como paramêtro e colocamos l, (n,l)
function inLista(n, l){
   //Se ele for diferente de -1 
  if(l.indexOf(Number(n))!= -1){
   return true //Retorna verdadeiro para as tropas
  }else{
   return false //Caso não ele precisa me retornar falso
  }
}

function adicionar(){
   //Ele apenas vai adicionar se os dois forem verdadeiros

   //Se isNumero que é a primeira função(num.value), convertemos a variavel num e !inLista(num.value,valores que é o nosso vector)
   if(isNumero(num.value) && !inLista(num.value,valores)){//!inLista signi
        valores.push(Number(num.value))//Com objetivo de adicionar um elemento no vector
        //Agora vamos adicionar no select
        let item=document.createElement('option')//Ele vai criar uma tag option
        item.text=`Valor ${num.value} adicionado`//Ele vai ser uma string 
        lista.appendChild(item)
        res.innerHTML=''
   }else{
      window.alert('Valor inválido ou já encontrado na lista ') //Retorne falso
   }
   //Vamos fazer para ele apagar de uma forma automática
   num.value=''
   num.focus()

}

function finalizar(){
   if(valores.length==0){
      window.alert('Adicione valores antes de finalizar')
   }else{
      let tot=valores.length
      let maior=valores[0]//O maior número fica na posição 0
      let menor=valores[0]//O menor número fica na posição 0
      let soma=0
      let media=0

      for(let pos in valores){//Temos um laço de percurso
         soma+=valores[pos] //Ele vai começando somar todos os valores exibe os resultados
         if(valores[pos]>maior)
            maior=valores[pos]

         if(valores[pos<menor])
            menor=valores[pos]
      }
      media=soma/tot
      res.innerHTML='' //Vamos zerar o valor
      res.innerHTML+=` <p>Ao todo, temos ${tot} números cadastrados.</p>`
      //Já temos o maior e o menor número então precisamos fazer adição de valores
      res.innerHTML+=`<p> O Maior valor informado foi ${maior}.</p>`
      res.innerHTML+=`<p> O Menor valor informado foi ${menor}.</p>`
           res.innerHTML+=`<p>  Somando todos os valores, temos ${soma}.</p>`

            res.innerHTML+=`<p>A media dos valores digitados é  ${media}.</p>`
   }
}