const storageKeyDark = "modoEscuro";
const storageKeyFont = "tamanhoFonte";
const root = document.documentElement;
const slider = document.getElementById("fontSlider");
const email = document.getElementById("email");

function aplicarPreferencias() {
    if (localStorage.getItem(storageKeyDark) === "1") {
        root.classList.add("escuro");
    }

    const tamanhoSalvo = localStorage.getItem(storageKeyFont);
    if (tamanhoSalvo) {
        root.style.fontSize = tamanhoSalvo + "%";
        if (slider) {
            slider.value = tamanhoSalvo;
        }
    }
}

function modoEscuro() {
    root.classList.toggle("escuro");
    localStorage.setItem(storageKeyDark, root.classList.contains("escuro") ? "1" : "0");
}

if (slider) {
    slider.addEventListener("input", function() {
        root.style.fontSize = this.value + "%";
        localStorage.setItem(storageKeyFont, this.value);
    });
}

if (email) {
    email.addEventListener("input", function () {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Insira um formato de email valido");
        } else {
            email.setCustomValidity("");
        }
    });
}

document.addEventListener("DOMContentLoaded", aplicarPreferencias);