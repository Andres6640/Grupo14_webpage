/* mainMedia.js */

/* Main de media.html ------------------------ */

const mainMediaJS = `
    <h1>Galería</h1>

    <div class="grid-container">
        <div><img src="img/pantera-L-lateral.jpg" title="De Tomaso Pantera L" alt="De Tomaso Pantera L"></div>
        <div><img src="img/pantera-GTS-frente.jpg" title="De Tomaso Pantera GTS" alt="De Tomaso Pantera GTS"></div>
        <div><img src="img/pantera-Si-frente.jpg" title="De Tomaso Pantera 90 Si" alt="De Tomaso Pantera 90 Si"></div>
        <div><img src="img/pantera-L-atras.jpg" title="De Tomaso Pantera L" alt="De Tomaso Pantera L"></div>
        <div><img src="img/pantera-GTS-atras.jpg" title="De Tomaso Pantera GTS" alt="De Tomaso Pantera GTS"></div>
        <div><img src="img/pantera-Si-atras.jpg" title="De Tomaso Pantera 90 Si" alt="De Tomaso Pantera 90 Si"></div>
        <div><iframe src="https://www.youtube.com/embed/jy_TnTq7NEU?si=3ZAZNipRq-zigOxZ" allowfullscreen></iframe></div>
        <div><iframe src="https://www.youtube.com/embed/ofFtQOt_xC4?si=sYOdx5QJb8HGTGW-" allowfullscreen></iframe></div>
        <div><iframe src="https://www.youtube.com/embed/VrkFwBOR444?si=qXp920CQOMgkebFs" allowfullscreen></iframe></div>
    </div>`;

document.querySelector("#mainMedia").innerHTML = mainMediaJS;
