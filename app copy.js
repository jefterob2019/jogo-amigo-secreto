let listaDeAmigos = [];  // Lista de amigos cadastrados

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let inserirAmigo = document.querySelector('input').value.trim(); // Obtém o valor do input e remove espaços extras

    if (inserirAmigo == '') {
        alert('Por favor insira um nome válido');
    } else if (listaDeAmigos.includes(inserirAmigo)) {  // Verifica se o nome já existe na lista
        alert('Este nome já foi adicionado!');
        limparCampo();
    } else {
        // Adiciona o nome na lista se não houver duplicação
        listaDeAmigos.push(inserirAmigo);

        let exibirLista = document.getElementById('listaAmigos');
        exibirLista.innerHTML = '';  // Limpa a lista para exibir novamente

        // Exibe todos os amigos da lista
        for (let i = 0; i < listaDeAmigos.length; ++i) {
            let li = document.createElement('li');
            li.innerText = listaDeAmigos[i];
            exibirLista.appendChild(li);
        }

        limparCampo(); // Limpa o campo de input após adicionar o nome

        console.log(listaDeAmigos); // Exibe a lista de amigos no console
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {  // Verifica se há amigos na lista
        alert('Por favor, insira pelo menos um nome.');
        return;
    }

    // Gerar um índice aleatório para sortear um amigo
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    // Exibir o amigo sorteado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

    // Limpar a lista de amigos na interface
    limparLista();

    // Limpar o array de amigos para não permitir sorteios adicionais até um novo jogo
    listaDeAmigos = [];
}

// Função para limpar o campo de entrada
function limparCampo() {
    let nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}

// Função para limpar a lista de amigos na interface
function limparLista() {
    let exibirLista = document.getElementById('listaAmigos');
    exibirLista.innerHTML = '';  // Limpa a lista exibida na tela
}
