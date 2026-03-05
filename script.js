const buttons = document.querySelectorAll('.toggle button');
const body = document.body;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    body.setAttribute('data-lang', lang);
    buttons.forEach(b => b.classList.toggle('active', b === btn));
  });
});
