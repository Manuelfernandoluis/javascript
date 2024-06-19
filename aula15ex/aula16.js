 
 //Var e let têm a diferença de escopo
 function contar(){
  //As caixas de textos não podemos considerar como número elas são string e praticamente para usar como número temos de práticar
   let ini =document.getElementById('txti')

   let fim=document.getElementById('txtf')

   let passo=document.getElementById('txtp')

   let res = document.getElementById('res')

   if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    window.alert('[ERRO] faltam dados !')
    res.innerHTML="Impossível contar"
   }else{
    res.innerHTML='Contando: '
    let i =Number(ini.value)
    let f =Number(fim.value)
    let p =Number(passo.value)
 if(p<=0){
  window.alert('Passo Inválido! considerando passo 1')
  p=1
 }

//A contagem aocontrária apenas funciona se o valor do inicio for menor do que o valor do final
if(i<f){
  //Vamos fazer uma contagem crescente 
  for(let c =i; c<=f; c+= p){
    //Esse + é concatenação, para o emoji vamos tirar U+1F60B o U+
    res.innerHTML +=`${c}  \u{1F449}`
     //Agora vamos colocar bandeirinha
    // res.innerHTML += `\u{1F3C1}`
  }
  }else{
    //Contagem regressiva
    for(let c=1; c>=f;c-=p){
      res.innerHTML+=`${c} \u{1F449} `
    }
    
}
   
res.innerHTML += `\u{1F3C1}`  
   }
 }