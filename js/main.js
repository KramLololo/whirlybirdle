require(["game"], function (Game) {
    const params = new URLSearchParams(window.location.search);
    if (params.has("game")) {
        new Game(document.getElementById("container"));
    }
});
