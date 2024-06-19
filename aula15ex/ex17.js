 function generateTable(){
    const number =document.getElementById('number').value;
    const tableDiv=document.getElementById('table');

    tableDiv.innerHTML="";//Limpa qualquer conteudo anterior 

    if(number === ""){
        tableDiv.innerHTML="Por favor insira um número"
        return;
    }

    const table= document.createElement('table');
    table.border=1;
    table.style.background='yellow'
     
     

    for (let i=1; i<=10;i++){
        const row=table.insertRow();
        const cell1=row.insertCell(0);
        const cell2=row.insertCell(1);
        const cell3=row.insertCell(2);

        cell1.textContent=number;
        cell2.textContent="X"
        cell3.textContent=i+'='+(number*i);

    }

    tableDiv.appendChild(table);
 }