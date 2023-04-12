// HABILITAR COMPONENTES DE BOOTSTRAP
// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// [HANDLE EVENTS]
// scroll 
window.addEventListener("scroll", () => {
    const nav = document.getElementById('nav');
    (window.pageYOffset > 40)
        ? nav.classList.add("move")
        : nav.classList.remove("move")
})

// onclick
document.querySelectorAll(".card-img-top").forEach(img => {
    const fullscreen = document.getElementById("fullscreen");
    img.addEventListener("click", (e) => {
        fullscreen.style.display = "block";
        fullscreen.style.backgroundImage = `url(${e.target.src})`
    })
})

// form submit
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = new Date(Date.now());
    const popup = document.getElementById('popup');
    document.getElementById("date").textContent = date.toLocaleString();
    const toast = bootstrap.Toast.getOrCreateInstance(popup);
    toast.show()
    setTimeout(() => {
        toast.hide()
    }, 2500)
    e.target.reset();
})