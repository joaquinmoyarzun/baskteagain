let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

// Inicializar puntajes
let homeCount = 12; // Valor inicial de HOME
let guestCount = 5;  // Valor inicial de GUEST

// Mostrar puntajes iniciales
homeEl.textContent = homeCount;
guestEl.textContent = guestCount;

function plusone() {
    homeCount += 1; // Incrementar HOME
    homeEl.textContent = homeCount;
}

function plustwo() {
    homeCount += 2; // Incrementar HOME
    homeEl.textContent = homeCount;
}

function plusthree() {
    homeCount += 3; // Incrementar HOME
    homeEl.textContent = homeCount;
}

function plusoneg() {
    guestCount += 1; // Incrementar GUEST
    guestEl.textContent = guestCount;
}

function plustwog() {
    guestCount += 2; // Incrementar GUEST
    guestEl.textContent = guestCount;
}

function plusthreeg() {
    guestCount += 3; // Incrementar GUEST
    guestEl.textContent = guestCount;
}
