// эти настройки взяты для примера и есть в сборке gulp
(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
  });
})();

//эти настройки нужно скопировать

let burger = document.querySelector('.burger');
burger.addEventListener('click', function(){
  let menu = document.querySelector('.nav');
  let menuOpen = document.querySelector('nav--active');
  let body = document.querySelector('body');
  let lock = document.querySelector('lock');
  menu.classList.toggle('nav--active');
  body.classList.toggle('lock');
})
