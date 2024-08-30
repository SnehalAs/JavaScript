function toggleLike() {
    const button = document.getElementById('like-button');
    const icon = document.getElementById('like-icon');
    const text = document.getElementById('like-text');

    if (text.innerText === 'Like') {
        text.innerText = 'Unlike';
        button.classList.add('unlike');
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        text.innerText = 'Like';
        button.classList.remove('unlike');
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
}
