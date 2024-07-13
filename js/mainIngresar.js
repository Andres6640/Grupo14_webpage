/* mainIngresar.js */

/* Main de ingresar.html --------------------- */

/*
    Campos:
        Email
        Contraseña
*/

const API_SERVER = "http://localhost:3000/api";

const page = document.getElementById("mainIngresar");

/* Crea y agrega <h1>Ingresar</h1> */
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "Ingresar";
page.appendChild(pageTitle);

/* Crea y agrega ventana base */
const container = document.createElement("div");
container.classList.add("container");
container.innerHTML = "";
page.appendChild(container);

/* Crea y agrega barra de titulo */
const titleBar = document.createElement("div");
titleBar.classList.add("titleBar");
container.appendChild(titleBar);

/* Crea y agrega el titulo */
const titulo = document.createElement("span");
titulo.innerHTML = "Ingresar";
titleBar.appendChild(titulo);

/* Boton de cierre (x) de container */
const btnClose = document.createElement("span");
btnClose.classList.add("btn-close");
btnClose.title = "Cerrar";
btnClose.innerHTML = "&times;";
titleBar.appendChild(btnClose);

/* Crea y agrega el formulario de login */
const formLogin = document.createElement("form");
formLogin.method = "post";
//formLogin.action = "";
container.appendChild(formLogin);

/* Crea y agrega una caja para el Email */
const fieldEmail = document.createElement("input");
fieldEmail.type = "email";
fieldEmail.placeholder = "Email";
fieldEmail.required = true;
formLogin.appendChild(fieldEmail);

/* Crea y agrega una caja para la Contraseña */
const fieldPassword = document.createElement("input");
fieldPassword.type = "password";
fieldPassword.placeholder = "Contraseña";
fieldPassword.required = true;
formLogin.appendChild(fieldPassword);

/* Crea y agrega un párrafo */
const aviso = document.createElement("p");
aviso.classList.add("mensaje");
aviso.innerHTML = "Todos los campos son obligatorios";
formLogin.appendChild(aviso);

/* Crea y agrega boton de envio */
const buttonSubmit = document.createElement("input");
buttonSubmit.classList.add("boton");
buttonSubmit.type = "submit";
buttonSubmit.value = "Ingresar";
formLogin.appendChild(buttonSubmit);

/* Validación de campos del formulario */
formLogin.addEventListener('submit', (event) => {
    if (!validateForm()) {
       event.preventDefault(); // evita que el formulario se envíe si hay errores de validación
    }

    /* Ya que los campos son válidos, envío la petición al server para validar el login */
    let email = fieldEmail.value.trim();
    let password = fieldPassword.value.trim();

    const body = {
        email: email,
        password: password
    }

    const options = createFetchOptions("POST", body);
    sendData(options);
    container.style.display = "none";
    event.preventDefault();
});

/* Captura el evento click del boton de cierre */
btnClose.addEventListener("click", () => {
    container.style.display = "none";
    window.location.replace("index.html");
});


/* Funciones *******************************************************************/

function validateForm() {
    let email = fieldEmail.value.trim();
    let password = fieldPassword.value.trim();

    if (email === "") {
        alert("El campo Email no puede estar vacío");
        return false;
    }

    if (password === "") {
        alert("El campo Contraseña no puede estar vacío");
        return false;
    }

    return true;
}

/* Funciones *****************************************************************/

function createFetchOptions(method, body) {
    //const token = localStorage.getItem('token');

    return {
        method: method,
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            //authorization: token,
        },
        body: JSON.stringify(body),
    };
}

function sendData(options) {
    const url = `${API_SERVER}/users/login`;

    fetch (url, options)
        .then (response => response.json())
        .then (data => {
            console.log("Login valido")
            sessionStorage.setItem("logged_user", data.id)
            window.location.replace("perfil.html");
        })
        .catch (error => console.log("Error en acceso API:", error));
}
