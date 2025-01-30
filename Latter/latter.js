// script.js
document.getElementById('open-btn').onclick = function() {
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');
    const closeBtn = document.getElementById('close-btn');
    
    // Rotate the flap to open it
    flap.style.transform = 'rotateX(-180deg)';
    
    // Move the letter upwards to reveal it
    letter.style.bottom = '0';
    
    // Hide the open button and show the close button
    this.style.display = 'none';
    closeBtn.style.display = 'block';
}

document.getElementById('close-btn').onclick = function() {
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');
    const openBtn = document.getElementById('open-btn');
    
    // Rotate the flap back to close it
    flap.style.transform = 'rotateX(0deg)';
    
    // Move the letter downwards to hide it
    letter.style.bottom = '-100%';
    
    // Hide the close button and show the open button
    this.style.display = 'none';
    openBtn.style.display = 'block';
}
