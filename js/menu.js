
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });
}
