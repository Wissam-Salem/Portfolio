let homeBtn = document.getElementById("float");
let home = document.getElementById("home");
let aboutBtn = document.getElementById("aboutBtn");
let about = document.getElementById("about");
let projectsBtn = document.getElementById("projectsBtn");
let projects = document.getElementById("projects");
let contactBtn = document.getElementById("contactBtn");
let contact = document.getElementById("contact");

document?.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        homeBtn.style.display = "block";
    } else {
        homeBtn.style.display = "none";
    }
});

homeBtn.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth", block: "start" });
});

aboutBtn.addEventListener("click", () => {
    about.scrollIntoView({ behavior: "smooth", block: "start" });
});

projectsBtn.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth", block: "start" });
});

contactBtn.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
});
