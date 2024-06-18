/* mainContacto.js */

/* Main de contacto.html --------------------- */

/*
    Campos:
        Nombre y apellido
        Email
        Mensaje
*/

const page = document.getElementById("mainContacto");

/* Crea y agrega <h1>Contacto</h1> */
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "Contacto";
page.appendChild(pageTitle);

/* Crea y agrega ventana base */
const container = document.createElement("div");
container.classList.add("container");
container.innerHTML = "";
page.appendChild(container);

/* Crea y agrega el formulario de contacto */
const formContacto = document.createElement("form");
formContacto.method = "post";
//formContacto.action = "";
container.appendChild(formContacto);

/* Crea y agrega una caja de texto para el Nombre y Apellido */
const fieldName = document.createElement("input");
fieldName.type = "text";
fieldName.placeholder = "Nombre y Apellido";
fieldName.required = true;
formContacto.appendChild(fieldName);

/* Crea y agrega una caja para el Email */
const fieldEmail = document.createElement("input");
fieldEmail.type = "email";
fieldEmail.placeholder = "Email";
fieldEmail.required = true;
formContacto.appendChild(fieldEmail);

/* Crea y agrega el textarea para el mensaje */
const fieldMensaje = document.createElement("textarea");
fieldMensaje.rows = 5;
fieldMensaje.placeholder = "Mensaje";
fieldMensaje.required = true;
formContacto.appendChild(fieldMensaje);

/* Crea y agrega boton de envio */
const buttonSubmit = document.createElement("input");
buttonSubmit.classList.add("boton");
buttonSubmit.type = "submit";
buttonSubmit.value = "Enviar";
formContacto.appendChild(buttonSubmit);
