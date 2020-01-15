let board = document.getElementById('board');
// Outra forma de selecionar seria pelo querySelector:
// let board = document.querySelector('#board');

let buttonAdd = document.getElementById('add');

let inputAdd = document.getElementById('novaTarefa');

let listaTarefas = [];

// Para atualizarmos nossa lista de tarefas e mantermos as informações no local storage:
if(localStorage.getItem('listaTarefas')){
    listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'))
}else{
// Stringfy - converte um array em JSON. Parse - converte JSON em array.
// localStorage - objeto global do JS
localStorage.setItem('listaTarefas',JSON.stringify(listaTarefas));
}

// Chamando a função imprimirListaTarefas
imprimirListaTarefas(listaTarefas);

buttonAdd.onclick = function(){
    // Pegando o valor digitado no input pelo usuário
    let valorDigitado = inputAdd.value;
    listaTarefas.push(valorDigitado);

    // alert('Estou funcionando');
    // Criando uma div que armazenará uma nova tarefa ao clicar no botão add
    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa m-1');

    let titulo = document.createElement('div');
    titulo.setAttribute('class','col-md-8');
    titulo.textContent = valorDigitado;

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

    // Atualizando o localstorage com o novo item que salvei
    localStorage.setItem('listaTarefas',JSON.stringify(listaTarefas));
}

// Criando funções que vai imprimir as informações que tenho no meu array listaTarefas
function imprimirListaTarefas(listaTarefas){
    // Foreach do javascript
   for(let tarefa of listaTarefas){
       gerarTarefa(tarefa);
   } 
}

// Criando função que gera uma tarefa
function gerarTarefa(valorDigitado){
    // Criando uma div que armazenará uma nova tarefa ao clicar no botão add
    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa m-1');

    let titulo = document.createElement('div');
    titulo.setAttribute('class','col-md-8');
    titulo.textContent = valorDigitado;

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