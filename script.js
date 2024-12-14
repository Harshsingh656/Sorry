function showHeart() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '0';
    heart.style.fontSize = '3em';
    heart.style.animation = 'heart-animation 2s forwards';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000); // Remove heart after animation is complete
}
