
//Os objectos são os tipos mais importante em javacript

var book={//Eles são representados entre chavetas
  topic:'javascript', //topic é determinado como propriedade que tem um valor
  fat:true

}

//Podemos acessar os dados atraves desta forma 

book.topic

console.log(book.topic)//Ele vai imprimir de primeira javascript

//Podemos acessar através de chavetas
console.log(book["fat"])

//Podemos criar novas propriedades através da atribuição
//book.author='Manuel Luís'

//console.log(book['author'])//Já esta criada agora imprimimos

//Vamos criar uma propriedade vazia 
book.contents={}

book.estudo='Sabedoria'
console.log(book.estudo)//Estudo é uma propriedade e ao inves de ele escrever a propriedade criada ele vai informar o valor que se encontra desta propriedadez

console.log(book.contents) //ELe mostrou que o objecto está completamente vazio
console.log('book')