/* mainMedia.js */

/* Main de media.html ------------------------ */

const images = [{"src": "img/pantera-L-lateral.jpg", "title": "De Tomaso Pantera L"},
                {"src": "img/pantera-GTS-frente.jpg", "title": "De Tomaso Pantera GTS"},
                {"src": "img/pantera-Si-frente.jpg", "title": "De Tomaso Pantera 90 Si"},
                {"src": "img/pantera-L-atras.jpg", "title": "De Tomaso Pantera L"},
                {"src": "img/pantera-GTS-atras.jpg", "title": "De Tomaso Pantera GTS"},
                {"src": "img/pantera-Si-atras.jpg", "title": "De Tomaso Pantera 90 Si"}
];

const videos = [{"src": "https://www.youtube.com/embed/jy_TnTq7NEU?si=3ZAZNipRq-zigOxZ"},
                {"src": "https://www.youtube.com/embed/ofFtQOt_xC4?si=sYOdx5QJb8HGTGW-"},
                {"src": "https://www.youtube.com/embed/VrkFwBOR444?si=qXp920CQOMgkebFs"}
];

const page = document.getElementById("mainMedia");

/* Crea y agrega <h1>Galería</h1> */
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "Galería";
page.appendChild(pageTitle);

/* Crea y agrega contenedor de cada imagen/video */
const container = document.createElement("div");
container.classList.add("grid-container");
container.innerHTML = "";
page.appendChild(container);

/* Crea y agrega cada imagen */
images.forEach(image => {
    const frameImage = document.createElement("div");
    frameImage.innerHTML = `
        <img src="${image.src}" title="${image.title}" alt="${image.title}">
    `;

    container.appendChild(frameImage);

    /* Evento click para abrir imagen ampliada */
    frameImage.addEventListener("click", () => {
        showZoomBox(image);
    });
});

/* Crea y agrega cada video */
videos.forEach(video => {
    const frameVideo = document.createElement("div");
    frameVideo.innerHTML = `
        <iframe src="${video.src}" allowfullscreen></iframe>
    `;

    container.appendChild(frameVideo);
});

function showZoomBox(image) {
    const frameZoom = document.createElement("div");
    frameZoom.classList.add("zoom-modal");
    frameZoom.innerHTML = "";
    page.appendChild(frameZoom);

    const zoomClose = document.createElement("span");
    zoomClose.classList.add("zoom-modal-close");
    zoomClose.title = "Cerrar";
    zoomClose.innerHTML = "&times;";
    frameZoom.appendChild(zoomClose);

    const zoomContent = document.createElement("div");
    zoomContent.classList.add("zoom-content");
    zoomContent.innerHTML = "";
    frameZoom.appendChild(zoomContent);

    const content = `
        <h4>${image.title}</h4>
        <img src="${image.src}" title="${image.title}" alt="${image.title}">
    `;

    zoomContent.innerHTML = content;

    /* Captura el evento click del boton de cierre */
    zoomClose.addEventListener("click", () => {
        frameZoom.style.display = "none";
    });

    frameZoom.style.display = "block";
}
