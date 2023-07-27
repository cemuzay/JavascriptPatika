let counter = 0;
let counterDom;

document.addEventListener("DOMContentLoaded", function() {
    counterDom = document.querySelector('#counter'); // Move the querySelector here

    let increaseDOM = document.querySelector('#increase');
    let decreaseDom = document.querySelector('#decrease');

    increaseDOM.addEventListener("click", function() {
        console.log(this.id);
    });

    decreaseDom.addEventListener("click", function() {
        console.log(this.id);
    });

    increaseDOM.addEventListener("click", clickevent);
    decreaseDom.addEventListener("click", clickevent);
});

function clickevent() {
    console.log(this.id);
    if (this.id === "increase") {
        counterDom.innerHTML = ++counter;
    } else {
        counterDom.innerHTML = --counter;
    }
}
