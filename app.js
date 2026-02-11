"use strict";
const $ = (selector) => document.querySelector(selector);
const group = (document.getElementById("group").innerHTML = "A")
const codigo = (document.getElementById("codigo").innerHTML = "1033260000 - SC01")

const form = $("#formAnimo")
const btnReset = $("#btnReset")
// const btnPrimary = $("#btnPrimary")
const a = $("#animo")
const n = $("#nombre")
let animo = " ", nombre = " "
form.addEventListener("submit", function (e) {
    e.preventDefault();
    nombre = n.value
    animo = a.value
    if (!form.checkValidity()) {
        form.reportValidity();
        setMessage("Revisa los campos marcados.", "error");
        return;
    }
    form.reset()
    buildMessage(nombre, animo)
});

function buildMessage(nombre, animo) {
    var li = document.createElement('li');
    switch (animo) {
        case "feliz":
            li.textContent = `${nombre} está ${animo}😊`
            document.getElementById('list').appendChild(li);
            break;
        case "serio":
            li.textContent = `${nombre} está ${animo}🫤`
            document.getElementById('list').appendChild(li);
            break;
        case "cansado":
            li.textContent = `${nombre} está ${animo}😔`
            document.getElementById('list').appendChild(li);
            break;
        case "parchao":
            li.textContent = `${nombre} está ${animo}🗿`
            document.getElementById('list').appendChild(li);
            break;
        case "achicopalao":
            li.textContent = `${nombre} está ${animo}🫠`
            document.getElementById('list').appendChild(li);
            break;
        default:
            var li2 = document.createElement('li');
            document.getElementById('list').innerHTML = li2.textContent
            li2.classList.add('error')
            li2.textContent = "Campos mal marcados"
            document.getElementById('list').appendChild(li2);
            break;
    }   
}
btnReset.addEventListener('click', () => {
    list.innerHTML = '';
});


