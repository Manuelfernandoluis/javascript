
function tabuada(){

let num=document.getElementById('txtn')
let tab=document.getElementById('tab')

if(num.value.length == 0){
    window.alert('Por favor digite um número')
    
}else{
    let n=Number(num.value)//Para converter em número 

    let c=1
    tab.innerHTML=''//Para limpar a tabuada
    while(c<=10){
        //É necessário eu criar um elemento do tipo option porque dentro do html se eu colocar a tag option ele vai criar com seu valor
        let item=document.createElement('option')

        //item.text que é o texto de dentro através de template string vamos colocar as nossas variaveis  para podermos fazer as nossas tabuadas 
        item.text=`${n} x ${c} =${n*c}`

        item.value=`tab${c}` //Para o javascript não faz mutios sentidos, mas para outras linguagens sim, isso serve para marcação 

        
        //Para ele poder aparecer vamos usar o appendChild que é adicionar um elemento filho

        tab.appendChild(item)
        //Houve uma travada porque esqueci de incrementar, precisamos incrementar para ele poder aumentar a sua cotação e efetuar a multiplicação 
        c++
    }
}

}