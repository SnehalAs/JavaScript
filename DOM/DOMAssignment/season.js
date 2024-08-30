function changeSeason(season) {
    const image = document.getElementById('season-image');
    const description = document.getElementById('season-description');
    
    if (season === 'spring') {
        document.body.style.backgroundColor = '#a8e6cf';
        image.src = 'spring.jpg';
        description.innerText = "It's Spring!";
    } else if (season === 'summer') {
        document.body.style.backgroundColor = '#ffd3b6';
        image.src = 'summer.jpg';
        description.innerText = "It's Summer!";
    } else if (season === 'fall') {
        document.body.style.backgroundColor = '#ffaaa5';
        image.src = 'fall.jpg';
        description.innerText = "It's Fall!";
    } else if (season === 'winter') {
        document.body.style.backgroundColor = '#dcedc1';
        image.src = 'winter.jpg';
        description.innerText = "It's Winter!";
    }
}
