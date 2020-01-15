let board = document.getElementById('board');
// Outra forma de selecionar seria pelo querySelector:
// let board = document.querySelector('#board');

let buttonAdd = document.getElementById('add');

buttonAdd.onclick = function(){
    // alert('Estou funcionando');
    // Criando uma div que armazenará uma nova tarefa ao clicar no botão add
    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa');

    let titulo = document.createElement('div');
    titulo.setAttribute('class','col-md-8');
    titulo.textContent = "Essa é uma nova tarefa";

    let checkDiv = document.createElement('div');
    checkDiv.setAttribute('class','col-md-2');

    let checkButton = document.createElement('button');
    checkButton.setAttribute('class','btn');
    // Para adicionar mais classes, basta separar por espaço ('class','btn btn-primary')
    // innerHTML - para o js renderizar o unicode como html, tenho que usar o innerHtml aqui, senão ele vai renderizar como texto puro
    checkButton.innerHTML = "&#9989;";
    // Se tivesse mais this.getAttributeNodeNS, era só declarar embaixo. Ex:
    // checkButton.setAttribute('src','img/check.png');

    // Colocando o elemento checkButton dentro da checkDiv
    checkDiv.appendChild(checkButton);

    // Colocando os elementos titulo e checkDiv dentro do elemento tarefa
    tarefa.appendChild(titulo);
    tarefa.appendChild(checkDiv);

    // Colocando o elemento tarefa dentro do elemento board
    board.appendChild(tarefa);
}