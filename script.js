const hambuger = document.querySelector(".nav-menu");
const navMenu = document.querySelector(".toolbar_list");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");  
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
}))
