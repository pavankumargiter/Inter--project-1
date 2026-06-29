function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

/* Scroll Animation */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});
function logout(){

localStorage.removeItem("token");

alert("Logged Out");

window.location.href="login.html";

}