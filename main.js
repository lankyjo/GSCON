let menu = document.getElementById('nav-links')
let menuBtn = document.getElementById('menu-btn')
let menuBtnIcon = document.querySelector('.menu-icon')
let navHeader = document.querySelector('.nav-header')
menuBtn.addEventListener('click', ()=>{
  menu.classList.toggle('open')
  menuBtnIcon.classList.toggle('ri-menu-line')
  menuBtnIcon.classList.toggle('ri-close-line')
})
menu.addEventListener('click', ()=>{
  menu.classList.toggle('open')
  menuBtnIcon.classList.toggle('ri-menu-line')
  menuBtnIcon.classList.toggle('ri-close-line')
})

window.addEventListener('scroll', ()=>{
  let scrollY = window.scrollY
  if(scrollY >= 50){
    navHeader.classList.add('active')
  }else{
    navHeader.classList.remove('active')
  }
})