
document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        const iris = eye.querySelector('.iris');
        const eyeRect = eye.getBoundingClientRect();

        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);

        const maxDistance = 20; // Maksymalne przesunięcie tęczówki
        const irisX = Math.cos(angle) * maxDistance * 0.3;
        const irisY = Math.sin(angle) * maxDistance * 0.3;

        iris.style.left = `${20 + irisX}px`;
        iris.style.top = `${20 + irisY}px`;
    });
});
