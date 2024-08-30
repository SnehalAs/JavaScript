function changeLight(color) {
    document.getElementById('red').classList.remove('on');
    document.getElementById('yellow').classList.remove('on');
    document.getElementById('green').classList.remove('on');
    
    if (color === 'stop') {
        document.getElementById('red').classList.add('on');
    } else if (color === 'ready') {
        document.getElementById('yellow').classList.add('on');
    } else if (color === 'go') {
        document.getElementById('green').classList.add('on');
    }
}
