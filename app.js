// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaParticipantes = [];

// Agrega un nombre a la lista
function agregarParticipante() {
    const input = document.getElementById('nombreParticipante');
    let nombre = input.value.trim();

    if (!esNombreValido(nombre)) {
        alert('El nombre no debe contener números ni estar vacío.');
        return;
    }

    if (estaRepetido(nombre)) {
        alert('El nombre ya está en la lista.');
        return;
    }

    listaParticipantes.push(nombre);
    actualizarLista();
    limpiarCampo('nombreParticipante');
}

// Valida que el nombre no tenga números ni esté vacío
function esNombreValido(nombre) {
    return typeof nombre === 'string' && nombre !== '' && !/\d/.test(nombre);
}

// Verifica si el nombre ya está en la lista (sin importar mayúsculas ni acentos)
function estaRepetido(nombre) {
    const normalizado = normalizarTexto(nombre);
    return listaParticipantes.some(p => normalizarTexto(p) === normalizado);
}

// Normaliza el texto para comparar sin mayúsculas ni acentos
function normalizarTexto(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Limpia el valor de un input
function limpiarCampo(idElemento) {
    document.getElementById(idElemento).value = '';
}

// Actualiza la lista de nombres en el HTML
function actualizarLista() {
    const ul = document.getElementById('listaParticipantes');
    ul.innerHTML = listaParticipantes.map((nombre, i) => `<li>${i + 1}. ${nombre}</li>`).join('');
}

// Sortea un participante aleatoriamente
function sortearParticipante() {
    if (listaParticipantes.length === 0) {
        alert('No hay participantes para sortear.');
        return;
    }

    const indice = Math.floor(Math.random() * listaParticipantes.length);
    const nombreSorteado = listaParticipantes[indice];

    mostrarResultado(`El amigo secreto es: <strong>${nombreSorteado}</strong>`);
    listaParticipantes = [];
    actualizarLista();
}

// Muestra el resultado del sorteo
function mostrarResultado(texto) {
    document.getElementById('resultadoSorteo').innerHTML = `<li>${texto}</li>`;
}

