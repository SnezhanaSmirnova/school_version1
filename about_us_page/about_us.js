"use strict"

document.getElementById("hidden").addEventListener('click', openProgramm);

function openProgramm(){
    document.querySelector('.course-programm__item-block').toggleAttribute('hidden');
}



let burger = document.getElementById('burger');
burger.addEventListener('click', openNavburger);

function openNavburger(){
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').toggleAttribute('hidden');
    document.getElementById('body').classList.toggle('lock');
}

let acc = document.getElementsByClassName("site-map__title");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}