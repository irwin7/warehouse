let passw = document.querySelector(".passw")
let nesw = document.querySelector(".hide-pass")
let elSettingsOpen = document.querySelector(".gear")
let elSettings = document.querySelector(".settings")
let n = 0

elSettingsOpen.addEventListener("click", function(){
  elSettings.classList.toggle("focus")
})
nesw.addEventListener("click", function(){
  if (n==0){
    nesw.classList.add("hide-me")
    passw.type="text" 
    n++
  }
  else {
    nesw.classList.remove("hide-me")
    passw.type = "password"
    n=0
  }
})
// tabs
var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки


window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

// $('.tabContent').slick({
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   // autoplay: true,
//   // autoplaySpeed: 2000,
// });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300:{
      slidesPerView: 2,
      spaceBetween:15,
    },
    768:{
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});