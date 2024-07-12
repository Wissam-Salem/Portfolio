let homeBtn = document.getElementById("float");
let home = document.getElementById("home");
let aboutBtn = document.getElementById("aboutBtn");
let aboutBtn2 = document.getElementById("aboutBtn2");
let about = document.getElementById("about");
let projectsBtn = document.getElementById("projectsBtn");
let projectsBtn2 = document.getElementById("projectsBtn2");
let projects = document.getElementById("projects");
let contactBtn = document.getElementById("contactBtn");
let contact = document.getElementById("contact-me");
let form = document.getElementById("send-email");

function sendemail() {
    var templateParams = {
        user: document.getElementById("email").value,
        subject: document.getElementById("name").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_qdefosa", "template_zevq9ky", templateParams).then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
            console.log("FAILED...", error);
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendemail();
})

document?.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        homeBtn.style.display = "flex";
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

aboutBtn2.addEventListener("click", () => {
    about.scrollIntoView({ behavior: "smooth", block: "start" });
});

projectsBtn.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth", block: "start" });
});

projectsBtn2.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth", block: "start" });
});

contactBtn.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
});

