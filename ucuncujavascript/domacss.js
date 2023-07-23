const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">...</svg>`;
const SAD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">...</svg>`;

let examgrade = prompt("Puani Girin :");
let TextInfo = document.querySelector("#textInfo");

document.addEventListener("DOMContentLoaded", function() {
    if (examgrade >= 0 && examgrade <= 100) {
        TextInfo.innerHTML = SMILE;
        TextInfo.classList.add('text-primary');

        if (examgrade >= 90) {
            TextInfo.innerHTML += " AA";
        } else if (examgrade >= 85) {
            TextInfo.innerHTML += " BA";
        } else if (examgrade >= 80) {
            TextInfo.innerHTML += " BB";
        } else if (examgrade >= 75) {
            TextInfo.innerHTML += " CB";
        } else if (examgrade >= 70) {
            TextInfo.innerHTML += " CC";
        } else if (examgrade >= 65) {
            TextInfo.innerHTML += " DC";
        } else if (examgrade >= 60) {
            TextInfo.innerHTML += " DD";
        } else if (examgrade >= 50) {
            TextInfo.innerHTML += " FD";
        } else if (examgrade < 50) {
            TextInfo.innerHTML += `${SAD} FF`;
            TextInfo.classList.remove('text-primary');
            TextInfo.classList.add('text-danger');
        } else {
            TextInfo.innerHTML = "bilgiler doğru değil";
        }
    } else {
        TextInfo.innerHTML = "bilgiler doğru değil";
    }
    let info = document.querySelector("#Info");
    info.innerHTML = `${TextInfo} -> ${examgrade}`;
    
});
