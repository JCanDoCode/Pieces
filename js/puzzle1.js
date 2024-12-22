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
                h6.classList.add("legal-move");
                h4.classList.add("legal-move");
                f6.classList.add("legal-move");
                f4.classList.add("legal-move");
                e7.classList.add("legal-move");
                e3.classList.add("legal-move");
                d8.classList.add("legal-move");
                d2.classList.add("legal-move");
                c1.classList.add("legal-move");
                await boardCords.forEach(grid => {
                    grid.addEventListener("click", () => {
                        g5.style.backgroundColor = "red";
                        setTimeout(() => {
                            e.target.removeAttribute("style");
                            e.target.classList.remove("legal-move");
                        }, 1000);
                    });
                });
                break;
            case g3:
                g3.style.backgroundColor = "#ffca38";
                f3.classList.add("legal-move");
                f4.classList.add("legal-move");
                g4.classList.add("legal-move");
                g2.classList.add("legal-move");
                h4.classList.add("legal-move");
                h3.classList.add("legal-move");
                h2.classList.add("legal-move");
                await boardCords.forEach(grid => {
                    grid.addEventListener("click", () => {
                        g3.style.backgroundColor = "red";
                        setTimeout(() => {
                            e.target.removeAttribute("style");
                            e.target.classList.remove("legal-move");
                        }, 1000);
                    });
                });
                break;
            case e8:
                e8.style.backgroundColor = "#ffca38";
                a8.classList.add("legal-move");
                b8.classList.add("legal-move");
                c8.classList.add("legal-move");
                d8.classList.add("legal-move");
                f8.classList.add("legal-move");
                g8.classList.add("legal-move");
                h8.classList.add("legal-move");
                e7.classList.add("legal-move");
                e6.classList.add("legal-move");
                e5.classList.add("legal-move");
                e4.classList.add("legal-move");
                e3.classList.add("legal-move");
                e2.classList.add("legal-move");
                e1.classList.add("legal-move");
                await boardCords.forEach(grid => {
                    grid.addEventListener("click", () => {
                        e8.style.backgroundColor = "red";
                        setTimeout(() => {
                            e.target.removeAttribute("style");
                            e.target.classList.remove("legal-move");
                        }, 1000);
                    });
                });
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