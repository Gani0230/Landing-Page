function displayMenu() {
    var links = document.querySelectorAll(".link");

    links.forEach(function(link) {
        var currentDisplay = window.getComputedStyle(link).display;

        if (currentDisplay === "none") {
            link.style.display = "block";
        } else {
            link.style.display = "none";
        }
    });
}


