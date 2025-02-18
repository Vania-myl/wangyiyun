const slides = document.querySelectorAll('.slide')
let currentIndex = 0
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active')
        } else {
            slide.classList.remove('active')
        }
    })
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);


showSlide(currentIndex)
let n=0


