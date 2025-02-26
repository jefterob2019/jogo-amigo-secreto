let listaDeAmigos = [];

function adicionarAmigo() {
    let inserirAmigo = document.querySelector('input').value.trim();
    if (inserirAmigo == '') {
        alert('Por favor insira um nome válido');
    } else if (listaDeAmigos.includes(inserirAmigo)) {
        alert('Este nome já foi adicionado!');
        limparCampo();
    } else {

        listaDeAmigos.push(inserirAmigo);

        let exibirLista = document.getElementById('listaAmigos');
        exibirLista.innerHTML = '';


        for (let i = 0; i < listaDeAmigos.length; ++i) {
            let li = document.createElement('li');
            li.innerText = listaDeAmigos[i];
            exibirLista.appendChild(li);
        }

        limparCampo();

        console.log(listaDeAmigos);
    }
}


function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Por favor, insira pelo menos um nome.');
        return;
    }


    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];


    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

    document.querySelector('input').addEventListener('focus', function () {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
    })


    limparLista();


    listaDeAmigos = [];
}


function limparCampo() {
    let nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}


function limparLista() {
    let exibirLista = document.getElementById('listaAmigos');
    exibirLista.innerHTML = '';
}
