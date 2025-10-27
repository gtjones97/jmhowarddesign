function toggleMenu() {
    var menu = document.querySelector(".custom-menu");
    menu.style.display = menu.style.display === "contents" ? "none" : "contents";

    var logo = document.querySelector(".header-logo");
    logo.style.display = logo.style.display === "none" ? "flex" : "none";
}