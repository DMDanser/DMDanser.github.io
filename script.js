const DEFAULT_OUTLINE = "solid";
const ACTIVE_OUTLINE = "10px solid #3b57e0ff";

function PresentGame(gameId)
{
    const gameImages = document.querySelectorAll(".gameImage");
    gameImages.forEach(element => {
        element.style.outline = DEFAULT_OUTLINE;
        element.classList.remove("active");
    });

    const video = document.querySelector(".gameVideo");
    video.setAttribute("src", "assets/videos/" + gameId + "_video.mp4");
    video.style.outline = ACTIVE_OUTLINE;
    video.style.borderStyle = "solid";
    video.style.borderColor = "black";
    video.style.borderWidth = "0 5px 0 5px";
    video.removeAttribute("hidden");

    const game = document.getElementById(gameId);
    game.style.outline = ACTIVE_OUTLINE;

    game.classList.add("active");
}

function HighlightGame(gameId)
{
    const gameImage = document.getElementById(gameId);

        if (gameImage.classList.contains("active"))
    {
        return;
    }
    gameImage.style.outline = "solid cyan";
}
function UnhighlightGame(gameId)
{
    const gameImage = document.getElementById(gameId);

    if (gameImage.classList.contains("active"))
    {
        return;
    }
    gameImage.style.outline = DEFAULT_OUTLINE;
}