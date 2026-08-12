// 7 KARANLIK — ortak arayüz davranışları
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('.menu-toggle');
  const scrim = document.querySelector('.scrim');

  function closeMenu(){
    sidebar && sidebar.classList.remove('open');
    scrim && scrim.classList.remove('show');
  }
  function openMenu(){
    sidebar && sidebar.classList.add('open');
    scrim && scrim.classList.add('show');
  }
  toggle && toggle.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeMenu() : openMenu();
  });
  scrim && scrim.addEventListener('click', closeMenu);

  // global search box -> jumps to Irklar/Karakterler search if used on those pages,
  // otherwise redirects to karakterler.html with query param
  const searchInputs = document.querySelectorAll('[data-global-search]');
  searchInputs.forEach(inp => {
    inp.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' && inp.value.trim()){
        window.location.href = 'karakterler.html?q=' + encodeURIComponent(inp.value.trim());
      }
    });
  });
});

function qs(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name) || '';
}
