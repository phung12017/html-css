$(".carousel").slick({
  infinite: true,
  slidesToShow: 4,
  arrows: false,
  centerMode: true,
  slidesToScroll: -1,
  centerPadding: "0",
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      } 

    
      
   
    },{
      breakpoint: 800,
      settings: {
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      } 

    
      
   
    }
    ,{
      breakpoint: 419,
      settings: {
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      } 
   
    }
  ],
});


const toggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".header-menu");
const toggleClose = document.querySelector(".header-close");
toggle.addEventListener("click", handleToggleMenu);
toggleClose.addEventListener("click", handleToggleMenu);
function handleToggleMenu(e) {
  menu.classList.toggle("is-show");
}
