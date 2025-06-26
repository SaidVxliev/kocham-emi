document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const eyeRect = eye.getBoundingClientRect();

        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);

        const maxDistance = 30; // Maksymalne przesunięcie źrenicy
        const pupilX = Math.cos(angle) * maxDistance * 0.3;
        const pupilY = Math.sin(angle) * maxDistance * 0.3;

        pupil.style.left = `${35 + pupilX}px`;
        pupil.style.top = `${35 + pupilY}px`;
    });
});
