//hecho por Frappé
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value == '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('El nombre ya fue agregado');
        return;
    }

    amigos.push(amigo.value);
    actualizarLista();
    amigo.value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        // Crear un elemento de lista para cada amigo
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Agrega al menos un amigo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Tu amigo secreto es: ' + amigoSecreto;

    // Limpiar la lista de amigos en el HTML
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // Ocultar el botón de sortear y mostrar el de reiniciar
    document.getElementById('boton-sortear').style.display = 'none';
    document.getElementById('boton-reiniciar').style.display = 'block';
}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';

    // Ocultar el botón de reiniciar y mostrar el de sortear
    document.getElementById('boton-reiniciar').style.display = 'none';
    document.getElementById('boton-sortear').style.display = 'block';
}

