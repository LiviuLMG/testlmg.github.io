// logo scrool-to-top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


// carusel
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carusel = document.querySelector('.carusel');

    if (prevButton && nextButton && carusel) {
        prevButton.addEventListener('click', () => {
            const scrollAmount = Math.max(carusel.scrollLeft - carusel.offsetWidth, 0);
            smoothScroll(carusel, scrollAmount);
        });

        nextButton.addEventListener('click', () => {
            const scrollAmount = Math.min(carusel.scrollLeft + carusel.offsetWidth, carusel.scrollWidth - carusel.clientWidth);
            smoothScroll(carusel, scrollAmount);
        });
    } else {
        console.error('Butoanele sau caruselul nu au fost găsite în DOM.');
    }
});
function smoothScroll(element, scrollAmount) {
    const start = element.scrollLeft;
    const duration = 500; // milisecunde

    let startTime = null;
    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        const timeElapsed = currentTime - startTime;

        const newPosition = easeOutCubic(timeElapsed, start, scrollAmount - start, duration);

        element.scrollLeft = newPosition;

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}
function easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
}


// Audi Driving Experience
var video = document.getElementById("video");

video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.play();
});
