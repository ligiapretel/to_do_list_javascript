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

    // Como passei um parâmetro na função gerar tarefa, quando chamo ela aqui preciso passar o parâmetro novamente
    // Para saber qual a posição do array entra a nova tarefa, dou um .lenght e subtraio 1. Esse é o valor que entrará no atributo posição
    gerarTarefa(valorDigitado, listaTarefas.length - 1);

    // Para não ficar redundante, comento os códigos abaixo relacionados a criação da tarefa e troco pela função gerar tarefa
            // // alert('Estou funcionando');
            // // Criando uma div que armazenará uma nova tarefa ao clicar no botão add
            // let tarefa = document.createElement('div');
            // tarefa.setAttribute('class','tarefa m-1');

            // let titulo = document.createElement('div');
            // titulo.setAttribute('class','col-md-8');
            // titulo.textContent = valorDigitado;

            // let checkDiv = document.createElement('div');
            // checkDiv.setAttribute('class','col-md-2');

            // let checkButton = document.createElement('button');
            // checkButton.setAttribute('class','btn');
            // // Para adicionar mais classes, basta separar por espaço ('class','btn btn-primary')
            // // innerHTML - para o js renderizar o unicode como html, tenho que usar o innerHtml aqui, senão ele vai renderizar como texto puro
            // checkButton.innerHTML = "&#9989;";
            // // Se tivesse mais this.getAttributeNodeNS, era só declarar embaixo. Ex:
            // // checkButton.setAttribute('src','img/check.png');

            // // Colocando o elemento checkButton dentro da checkDiv
            // checkDiv.appendChild(checkButton);

            // // Colocando os elementos titulo e checkDiv dentro do elemento tarefa
            // tarefa.appendChild(titulo);
            // tarefa.appendChild(checkDiv);

            // // Colocando o elemento tarefa dentro do elemento board
            // board.appendChild(tarefa);

    // Atualizando o localstorage com o novo item que salvei
    localStorage.setItem('listaTarefas',JSON.stringify(listaTarefas));
}

// Criando funções que vai imprimir as informações que tenho no meu array listaTarefas
function imprimirListaTarefas(listaTarefas){
    // Limpo todo o board para renderizar tudo de novo
    board.innerHTML = "";
    // Foreach do javascript
//    for(let tarefa of listaTarefas){
//        gerarTarefa(tarefa);
//    } 
    // Foreach verdadeiro do javascript (pega a posição e o valor)
    // O js vai percorrer o array e para cada item do array ele vai executar uma função anônima pegando o valor e a posição. Todo forEach pega o valor e a posição nessa ordem.
    listaTarefas.forEach(function(valor, posicao){
        gerarTarefa(valor,posicao)
    })
}

// Criando função que gera uma tarefa
function gerarTarefa(valorDigitado, posicao){
    // Criando uma div que armazenará uma nova tarefa ao clicar no botão add
    let tarefa = document.createElement('div');
    tarefa.setAttribute('class','tarefa m-1');
    // Criando atributo posicao, que será recebido na função - a posição será um número dinâmico
    tarefa.setAttribute('posicao',posicao);

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

    // Para saber qual botão foi clicado, adicionamos um evento com event.target. Coloco essa função no gerar tarefa para que eu já saiba qual botão exatamente foi clicado (se eu criasse essa função fora, teria que identificar antes qual era o botão clicado, e aqui eu já não preciso)
    // event.target - retorna o elemento que foi clicado
    checkButton.onclick = function(event){
        console.log(listaTarefas);
        let posicaoTarefa = tarefa.getAttribute('posicao');
        // A função filter retorna um Array, então eu faço listaTarefas = listaTarefas para atualizar esse Array.
        listaTarefas = listaTarefas.filter(function(valor,posicao){
            return posicao != posicaoTarefa;
        })

        imprimirListaTarefas(listaTarefas);
        // Atualizando o array com o item removido (localStorage), senão toda vez que der F5 esse item vai voltar
        localStorage.setItem('listaTarefas',JSON.stringify(listaTarefas));
        // Como já selecionei a div tarefa lá em createImageBitmap, posso removê-la direto aqui
        tarefa.remove();
        // Uma forma de selecionar a div tarefa é com event.target.parentNode
        // let divPai = event.target.parentNode.parentNode;
        // divPai.remove();
        // console.log(event.target.parentNode.parentNode);
    }

    // Colocando os elementos titulo e checkDiv dentro do elemento tarefa
    tarefa.appendChild(titulo);
    tarefa.appendChild(checkDiv);

    // Colocando o elemento tarefa dentro do elemento board
    board.appendChild(tarefa);
}