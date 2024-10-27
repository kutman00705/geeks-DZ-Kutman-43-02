const leftColorInput = document.getElementById('leftColorInput');
const rightColorInput = document.getElementById('rightColorInput');
const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');

// Меняем цвет правой половины при выборе цвета в левом контроле
leftColorInput.addEventListener('input', (event) => {
    rightSide.style.backgroundColor = event.target.value;
});

// Меняем цвет левой половины при выборе цвета в правом контроле
rightColorInput.addEventListener('input', (event) => {
    leftSide.style.backgroundColor = event.target.value;
});