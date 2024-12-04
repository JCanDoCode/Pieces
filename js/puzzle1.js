const boardCords = [...document.querySelectorAll(".board-cords")];
const playable = [...document.querySelectorAll(".playable")];

const placePiece= (e) => {
    switch(e.target) {
        case h5:
            h5.style.backgroundColor = "yellow";
            break;
        case g5:
            g5.style.backgroundColor = "yellow";
            break;
        case g3:
            g3.style.backgroundColor = "yellow";
            break;
        case e8:
            e8.style.backgroundColor = "yellow";
            break;
        default:
            playable.forEach(grid => {
                grid.removeAttribute("style");
            });
    }
}

boardCords.forEach(grid => {
    grid.addEventListener("click", placePiece);
});