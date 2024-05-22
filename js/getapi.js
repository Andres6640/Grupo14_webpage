/*
    The Cats API: Pictures of cats from Tumblr
    docs: https://developers.thecatapi.com
*/

function ShowProjectLeader() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {

        document.getElementById("show").src = data[0].url;
    });
}
