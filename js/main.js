require(["game"], function (Game) {
    // The top-level page is just the two-player layout. Each iframe loads this
    // same entry point with a `game` query parameter and owns a separate game.
    if (new URLSearchParams(window.location.search).has("game")) {
        new Game(document.getElementById("container"));
    }
});
