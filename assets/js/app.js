const menu = document.getElementById("menu");
const menuBars = document.getElementById("menu-bars");
const closeBtn = document.getElementById("close-btn");
menuBars.addEventListener("click", ()=>{
    menu.classList.add("mobile-menu");
    menuBars.style.display="none";
    closeBtn.style.display="block";
})
closeBtn.addEventListener("click", ()=>{
    menu.classList.remove("mobile-menu");
    menuBars.style.display="block";
    closeBtn.style.display="none";
})

// project slider
let slide = new Swiper('.slide', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
     delay: 3000,
   },
});