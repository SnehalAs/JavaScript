document.getElementById('applyButton').addEventListener('click', applyStyles);

function applyStyles() {
    const backgroundColor = document.getElementById('backgroundColor').value;
    const fontColor = document.getElementById('fontColor').value;
    const fontSize = document.getElementById('fontSize').value + 'px';
    const fontWeight = document.getElementById('fontWeight').value;
    const padding = document.getElementById('padding').value + 'px';
    const border = document.getElementById('border').value + 'px solid ' + backgroundColor;

    const customButton = document.getElementById('customButton');
    customButton.style.backgroundColor = backgroundColor;
    customButton.style.color = fontColor;
    customButton.style.fontSize = fontSize;
    customButton.style.fontWeight = fontWeight;
    customButton.style.padding = padding;
    customButton.style.border = border;
}
