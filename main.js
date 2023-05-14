const toggle = document.getElementById('moonLight');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
    }
    else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
        body.innerText.color = 'white';
    }

})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".right-icon",
      prevEl: ".left-icon",
    },
  });


