const boardCords = [...document.querySelectorAll(".board-cords")];
const white = [...document.querySelectorAll(".white")];

const placePiece = async (e) => {
    if(e.target = white) {
        boardCords.forEach(grid => {
            grid.removeAttribute("style");
            grid.classList.remove("legal-move");
        });
        switch(e.target) {
            case h5:
                h5.style.backgroundColor = "#ffca38";
                h6.classList.add("legal-move");
                g6.classList.add("legal-move");
                await h6.addEventListener("click", (e) => {
                    e.target.style.backgroundColor = "green";
                    e.target.classList.remove("black")
                    e.target.classList.add("pawn", "white");
                    h5.classList.remove("pawn");
                });
                await g6.addEventListener("click", () => g6.style.backgroundColor = "red");
                break;
            case g5:
                g5.style.backgroundColor = "#ffca38";
                break;
            case g3:
                g3.style.backgroundColor = "#ffca38";
                break;
            case e8:
                e8.style.backgroundColor = "#ffca38";
                break;
            default:
                boardCords.forEach(grid => {
                    grid.removeAttribute("style");
                    grid.classList.remove("legal-move");
                });
        }
    } else {
        boardCords.forEach(grid => {
            grid.removeAttribute("style");
            grid.classList.remove("legal-move");
        });
    }
}

boardCords.forEach(grid => {
    grid.addEventListener("click", placePiece);
});