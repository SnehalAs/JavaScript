function changeWidth(amount) {
    const image = document.getElementById('resizable-image');
    const currentWidth = image.clientWidth;
    const newWidth = currentWidth + amount;
    
    if (newWidth > 0) { // Ensure the width doesn't go negative or zero
        image.style.width = newWidth + 'px';
    }
}
