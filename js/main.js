
/* - --------------------------
     menu section
---------------------------  */ 
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}
/* ---------------------------
        color selector
---------------------------  */ 
let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
	themeToggler.classList.toggle('active');
}

menu.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	// select color
	themeToggler.classList.remove('active');
}
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color',color);
  };

});
/* ---------------------------
        home slide part
---------------------------  */      
 var swiper = new Swiper(".home-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        loop:true,
        autoplay:{
        	delay:3000,
        	disableOnInteraction:false,
        }
      });
// home slide end
/* ---------------------------
        review slide part
---------------------------  */      
 var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});
// review slide end



