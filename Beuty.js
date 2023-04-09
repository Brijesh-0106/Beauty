const obj = {
    strings: ["Hair-Styling", "Mahendi", "Nail-Art", "Make-Up", "Bride-Grooming"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
}
const typed = new Typed('.change', obj);

function sideshow() {
    let nav = document.getElementById("nav");
    let nav1 = document.getElementById("navres");
    nav1.classList.toggle("flexible");
    nav.classList.toggle("opo");
}
