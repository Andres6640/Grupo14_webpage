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
        console.log(image);
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
