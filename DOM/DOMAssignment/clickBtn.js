document.getElementById('colorButton').addEventListener('click', changeColor);

function changeColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
