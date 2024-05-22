 //Um homem decidiu comprar um carro de marca hatch

 var marca='motocicletas' //É importante fazer a escrita do jeito que você configurou no inicio porque se você tentar usar de uma froma diferente ele vai resultar em bug

 //Vamos criar nossa estrutura de controle que guarda valores fixos 

 switch(marca){
    case (marca='sedans'):
            console.log('Tens certeza que quer comprar esse produto ')
         break
             case(marca='motocicletas'):
                    console.log('Não compre')
                             break
                             case(marca='hatch'):
                             console.log('Compra efectuada com sucesso, obrigado e volte sempre....')
                                break
                                    default:
                                        console.log('Não temos esta marca, lamentamos ')

 }

 //Vamos começar com horas depois vamos para o mês

 agora=new Date()
 hora=agora.getHours() //Ele vai se responsabilizar pela hora
  minuto=agora.getMinutes()//Ele vai pegar os segundos 
  segundo=agora.getSeconds()//Ele vai dizer quais são os segundos 
  tempo=agora.getTime()//Vai dizer o time

  console.log(`Em Angola são ${hora} horas e ${minuto} minutos e ${segundo} segundos de ${tempo} `)