window.addEventListener('DOMContentLoaded', () => {

    //Lettre aléatoire

    const reslettre = document.querySelector('.res-lettre');
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    document.querySelector('.generate').addEventListener("click", () => {
        reslettre.innerHTML = alphabet.charAt(Math.floor(Math.random() * 26));
    })

    // Chiffre aléatoire

    const reschiffre = document.querySelector('.res-chiffre');
    let numberMin = document.querySelector('.min');
    let numberMax = document.querySelector('.max');

    document.querySelector('.generate-chiffre').addEventListener("click", () => {
        reschiffre.innerHTML = Math.floor(Math.random() * numberMax.value);
    })
    
})