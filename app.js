
let amigo = [];

function adicionarAmigo() {
    // Obtém valor do campo de texto
    let nomeAmigo = document.querySelector('#amigo').value;

    // Verifica se campo de texto não está vazio
    if (nomeAmigo.trim() !== '') {
	
    // Verifica se nome já existe no array amigo
    console.log (nomeAmigo);
    if (amigo.includes(nomeAmigo)) {
        alert("Este nome já existe na lista de amigos.");
        document.querySelector('#amigo').value = '';
        return; // Sai da função se nome já existir
    }
    // Adiciona nome ao array de amigos 
	amigo.push(nomeAmigo);

       
    // Cria um novo item de lista
        let li = document.createElement('li');
        li.textContent = nomeAmigo;
        
        // Adiciona novo item à lista de amigos
        document.querySelector('#listaAmigos').appendChild(li);
                     
        // Limpa campo de texto
        document.querySelector('#amigo').value = '';
    } else {
        alert("Por favor, insira um nome.");
    }
}

function atualizarListaAmigos() {
    // Seleciona elemento <ul>
    let listaElement = document.querySelector('#listaAmigos');
    
    // Limpa lista existente
    listaElement.innerHTML = "";
    
    // Percorre array de amigos e adiciona cada nome como um item <li> na lista
    amigo.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se lista de amigos não está vazia
    if (amigo.length > 0) {
        // Seleciona um índice aleatório no array
        let indiceAleatorio = Math.floor(Math.random() * amigo.length);
        // Obtém nome do amigo no índice aleatório
        let amigoSelecionado = amigo[indiceAleatorio];
        // Atualiza conteúdo do elemento de resultado
        document.getElementById('resultado').innerHTML = "Amigo selecionado aleatoriamente: " + amigoSelecionado;
    } else {
        document.getElementById('resultado').innerHTML = "A lista de amigos está vazia.";
    }
}


