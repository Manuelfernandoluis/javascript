 
 function carregar(){

    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    //Para carregar nós vamos usar o new date
    var data =new Date()
    var hora=data.getHours()
   
 
    msg.innerHTML=`Agora são ${hora} horas `
    
    if(hora>=0 && hora<12){
        //Bom dia 
    img.src="bomdia.jpg"
    //document.body.style.background='Cor de dia de acordo a foto'
    document.body.style.background='yellow'
    }else if(hora>=12 && hora< 18){
        //document.body.style.background='cor de tarde de acordo com a foto'
        document.body.style.background='blue'
        img.src="boatarde.jpg"
    }else{
        //document.body.style.background='cor de acordo com a noite com forme a foto mostra para ficar mais profissinonal
        img.src="boanoite.jpg"
        document.body.style.background='black'
    }
    
 }