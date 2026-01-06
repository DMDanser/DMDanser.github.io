const DEFAULT_OUTLINE = "solid";
const ACTIVE_OUTLINE = "10px solid rgba(129, 69, 130, 1)";

const gameDescriptions = 
{
    OfficeRumble: "Office Rumble is a game I created with team Lucid Adventures in Unreal Engine with C++. My major contributions on Office Rumble were all character actions, including AI enemy behavior.",
    GreedyGlutton: "Greedy Glutton is a game I created with team Adao House using Vulkan. My major contributions on Greedy Glutton were collision behaviors, the camera, and models.",
    Catalyst: "Catalyst is a game I created with team Wish Upon a Wizard in Unity with C#. My major contributions to Catalyst were the Creator Gun, the Bug Guy character, and the entirety of the Moon level."
}
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

    const gameDescription = document.querySelector(".gameDescription");
    gameDescription.innerHTML = gameDescriptions[gameId];
    gameDescription.style.display = "inline-block";
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