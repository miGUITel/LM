'use strict';
window.G = {
  q: (selector, root = document) => root.querySelector(selector),
  all: (selector, root = document) => Array.from(root.querySelectorAll(selector)),
  value: id => document.getElementById(id).value,
  checked: id => document.getElementById(id).checked,
  text: (id, text) => { document.getElementById(id).textContent = text; },
  px: number => `${Number(number).toLocaleString('es-ES', { maximumFractionDigits: 1 })}px`,
  setup(render, resetExtra = () => {}) {
    document.querySelectorAll('form').forEach(form => form.addEventListener('submit', event => event.preventDefault()));
    document.addEventListener('input', event => {
      if (event.target.matches('input, select')) render();
    });
    document.querySelectorAll('[data-reset]').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('form').forEach(form => form.reset());
        resetExtra();
        render();
      });
    });
    window.addEventListener('resize', render);
    render();
  }
};
