'use strict';
{
  const divs = document.querySelectorAll('nav div');
  const sections = document.querySelectorAll('nav section');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  divs.forEach(div => {
    div.addEventListener('click', () => {
      div.classList.toggle('active');
      if (div.classList.contains('active')) {
        document.getElementById(div.dataset.id).classList.add('show');
      } else {
        document.getElementById(div.dataset.id).classList.remove('show');
      }
    });
  });
  header.addEventListener('click', () => {
    divs.forEach(div => {
      div.classList.remove('active');
    });
    sections.forEach(section => {
      section.classList.remove('show');
    });
  });
  main.addEventListener('click', () => {
    divs.forEach(div => {
      div.classList.remove('active');
    });
    sections.forEach(section => {
      section.classList.remove('show');
    });
  });
}