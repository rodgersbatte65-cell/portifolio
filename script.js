function openSearch() {
    document.getElementById("searchBox").style.display = "flex";
    document.getElementById("searchInput").focus();
}

function closeSearch() {
    document.getElementById("searchBox").style.display = "none";
}

function watchMovie() {
    alert("VJ Live video player coming soon!");
}

function searchMovies() {
    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie) {
        let title = movie
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (title.includes(input)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
}