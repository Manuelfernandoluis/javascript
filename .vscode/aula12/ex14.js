var agora=new Date()

//Ele vai pegar o dia de semana 
var diaSem=agora.getHours()
 
/*Para o javascript os dias funcionam da seguinte forma:
0-Domingo
1-Segunda
2-Terça
3-Quarta
4-Quinta
5-Sexta
6-Sabádo

E quando eu coloco a rodar no node.js ele não mostra o dia de semana, ele mostra conforme a sequência númerica feita acima
*/
//Desse jeito nós forçamos 
console.log(diaSem)
/*Para sabermos o nome do dia da semana nós vamos usar switch*/

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
        case 1:
            console.log('Segunda Feira')
            break
            case 2:
                console.log('Terça Feira')
                break
                case 3:
                    console.log('Quarta Feira')
                    break
                    case 4:
                        console.log('Quinta Feira')
                        break
                        case 5:
                            console.log('Sexta Feira')
                            break
                            case 6:
                                console.log('Sabádo')
                                break

                                default:
                                    console.log('Dia inválido')
                                    break /*Esse break é bem opcional porque não tem comando por baixo*/
}

/*Desse jeito o break torna-se muito importante*/