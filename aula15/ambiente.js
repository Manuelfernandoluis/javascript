

let num=[5,2,9,3]

//Ele vai apresentar uma variavel vazia  porque não tem nenhum valor


   

//Se nós quizermos adicionar mais uma varivel ou mais, primeiro passo vamos contar os nossos indíces. sempre coloque da forma acima , o outro metodo é o push que significa adicionar. Para realizar o mesmo é nomeVariavel.push(7).

//num.push(7)

//Podemos saber o comprimento de array tambem
//num.length //Para algumas linguagens o length tem parenteses, mais para o javascript não existe isso. Porque na verdade lenght é um atributo

//Em javascript normalmente os metodos têm parenteses 

//Temos o metódo sort() que tem como função colocar as coisas de forma crescente, ex: num.sort()

//num.sort()

//console.log(`O nosso vector tem ${num.length} posições`)

// Se nós quisermos que ele mostre os números de acordo as suas posições faremos o seguinte:
//Nome da variavel[número da posição], lembrando que começa do 0 para cima

//console.log(` O segundo valor do vector é ${num[1]}`) 
//sort() é um elemento interno de qualquer vector e tem como função principal colocar em ordem os números.

num.sort()
num.push(1) //Quando vai se adicionar um elemento, coloque sempre depois do sort que é o elemento de organização
console.log(num)
console.log(`A nossa variavel composta tem ${num.length} posições `)
console.log(`O primeiro valor é ${num[0]}`)

//Para fazer com que os vectores apareçam normalmente, apenas coloque o nome da variavel e sua respectiva posição console.log(num[2]) ele vai mostrar o número na posição dois, isso é chamado de chave que indica a posição de cada vector.