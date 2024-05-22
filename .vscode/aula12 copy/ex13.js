//Para pegar a hora atual nós usamos os comandos abaixos 
var agora=new Date()
//E ele vai me mostrar na outra variavel qual é o resultado final 
var hora=agora.getHours()

var minuto=new Date()
var minutos=minuto.getMinutes()




console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos`)

if(hora<12){
    console.log('Bom dia ')
}else if(hora<=18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite ')
}