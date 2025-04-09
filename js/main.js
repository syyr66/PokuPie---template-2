$(function(){
    $('.pop-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      infinite: true,
    })
    $('.pop-prev').on('click', function (e) {
        e.preventDefault()
        $('.pop-slider').slick('slickPrev')
    })
    $('.pop-next').on('click', function (e) {
        e.preventDefault()
        $('.pop-slider').slick('slickNext')
    })
});

$(function(){
    $('.new-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      infinite: true,
    })
    $('.new-prev').on('click', function (e) {
        e.preventDefault()
        $('.new-slider').slick('slickPrev')
    })
    $('.new-next').on('click', function (e) {
        e.preventDefault()
        $('.new-slider').slick('slickNext')
    })
});

$('.catalogue-container').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.catg-container').offset().top
    }, 800); 
});
  


const arrowLeft = document.querySelector(".area-left");
const arrowRight = document.querySelector(".area-right");
const slides = document.querySelectorAll(".slider-image");
const paginationMarks = document.querySelectorAll(".pagination-mark");

let currentSlideIndex = 0;

function createPaginationCircle() {
    
}

function showSlide() {
    slides[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");
}

function updateArrowColors() {
    arrowLeft.classList.remove("arrow-area-dark");
    arrowRight.classList.remove("arrow-area-dark");

    if (currentSlideIndex === 1 || currentSlideIndex === 3) {
        arrowLeft.classList.add("arrow-area-dark");
        arrowRight.classList.add("arrow-area-dark");
    }
}

function nextSlide() {
    hideSlide();
    currentSlideIndex ++;
    if(currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;
    }
    showSlide();
    updatePagination();
    updateArrowColors();
}

function prevSlide() {
    hideSlide();
    currentSlideIndex --;
    if(currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide();
    updatePagination();
    updateArrowColors();
}

function updatePagination() {
    paginationMarks.forEach((mark) => mark.classList.remove('pagination-active'));
    paginationMarks[currentSlideIndex].classList.add('pagination-active');
}

paginationMarks.forEach((mark, index) => {
    mark.addEventListener("click", () => {
        hideSlide();
        currentSlideIndex = index;
        showSlide();
        updatePagination();
        updateArrowColors();
    });
});


arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", prevSlide);

updateArrowColors();