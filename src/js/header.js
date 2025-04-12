const refs = {
  btnOpen: document.querySelector('.open-nav-btn'),
  menu: document.querySelector('.mobile-menu'),
  btnClose: document.querySelector('.close-btn'),
  overlay: document.querySelector('.mobile-menu-overlay'),
  navElem: document.querySelectorAll('.link-nav'),
};

function closeMenu() {
  refs.menu.classList.remove('active');
  refs.overlay.classList.remove('active');
  document.body.style.overflow = '';

  setTimeout(() => {
    refs.menu.classList.add('hidden');
    refs.overlay.classList.add('hidden');
  }, 300);
}

function openMenu() {
  refs.menu.classList.remove('hidden');
  refs.overlay.classList.remove('hidden');

  requestAnimationFrame(() => {
    refs.menu.classList.add('active');
    refs.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

refs.btnOpen.addEventListener('click', openMenu);

refs.btnClose.addEventListener('click', closeMenu);

refs.navElem.forEach(link => {
  link.addEventListener('click', closeMenu);
});
