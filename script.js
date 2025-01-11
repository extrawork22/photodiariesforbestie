let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === i ? 'block' : 'none';
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 7000); // Change slide every 7 seconds

// Initialize the slideshow
showSlide(index);

// Welcome Section Interaction
document.getElementById('yes').addEventListener('click', () => {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('slideshow-section').style.display = 'block';
});

document.getElementById('no').addEventListener('click', () => {
    document.getElementById('welcome-section').innerHTML = "<h1>Okay! See you next time 😊</h1>";
});
