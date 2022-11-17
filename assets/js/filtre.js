const toggle = document.querySelector('#toggle-element');
const calque = document.querySelector('.calque__enigme__crea');

toggle.addEventListener('change', ({target}) => {
  calque.style.backgroundBlendMode = target.checked ? 'overlay' : 'normal';
});