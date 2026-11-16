const menuBtn = document.querySelector(".menu-toggle");
const navlinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    const isActive = navlinks.classList.toggle("is-active");
    menuBtn.setAttribute("aria-expanded", isActive);
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("is-active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !navlinks.contains(e.target)) {
        navlinks.classList.remove("is-active");
        menuBtn.setAttribute("aria-expanded", "false");
    }
});