const $ = (selector) => document.querySelector(selector);
const group = (document.getElementById("group").innerHTML = "A")
const codigo = (document.getElementById("codigo").innerHTML = "1033260000 - SC01")

const form = $("#form");
const btnReset = $("#btnReset")
const btnPrimary = $("#btnPrimary")
//const result = $("#result")
const animo = $("#animo")
const nombre = $("#nombre")

form.handleSubmit("submit", (e) => {
    e.preventDefault();
    setMessage("");

    if (!form.checkValidity()) {
        form.reportValidity();
        setMessage("Revisa los campos marcados.", "error");
        return;
    }

    setMessage("Registro enviado ✅", "success");
    form.reset();
});
// const result = buildMessage(nombre, animo); {
//     switch (animo) {
//         case feliz:
//             result = (document.getElementById("result").innerHTML = "😊")
//             break;
//         case serio:
//             result = (document.getElementById("result").innerHTML = "🫤")
//             break;
//         case cansado:
//             result = (document.getElementById("result").innerHTML = "😔")
//             break;
//         case parchado:
//             result = (document.getElementById("result").innerHTML = "🗿")
//             break;
//         case achicopalado:
//             result = (document.getElementById("result").innerHTML = "🫠")
//             break;

//         default:
//             setMessage("Revisa los campos marcados")
//             break;
//     }
// }

