const ham_icon = document.querySelector(".hamburger-icon");
const ham_menu = document.querySelector(".hamburger-menu");
let active = false;

const toggle_nav = () => {
    if (active == false) {
        ham_menu.style.transition = "transform 0.5s ease-in-out";
        ham_menu.style.transform = "translateX(50vw)";
        active = true;
    } else {
        active = false;
        ham_menu.style.transition = null;
        ham_menu.style.transform = null;
    }
};

ham_icon.addEventListener("click", toggle_nav);