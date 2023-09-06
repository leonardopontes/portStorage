const icons = document.querySelectorAll('.isec1 img');

setInterval(() => {
  const icon1 = document.querySelector('.isec1 .i1');
  const icon2 = document.querySelector('.isec1 .i2');

  icon1.classList.toggle('i1');
  icon2.classList.toggle('i1');
}, 4000);