$(function(){
    $('.pop-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      infinite: true,
      responsive:  [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 696,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 418,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,         // отключить центровку
                variableWidth: false,  
            }
        }
      ]
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
    $('.banner-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
    })
    $('.banner-prev').on('click', function (e) {
        e.preventDefault()
        $('.banner-slider').slick('slickPrev')
    })
    $('.banner-next').on('click', function (e) {
        e.preventDefault()
        $('.banner-slider').slick('slickNext')
    })
});

$(function(){
    $('.new-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      infinite: true,
      responsive:  [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 696,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 418,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,         // отключить центровку
                variableWidth: false,  
            }
        }
      ]
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

document.getElementById("sfooter__info-title").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("sfooter__info-popup").classList.toggle("active");
});

document.getElementById("sfooter__cat-info-title").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("sfooter__cat-info-popup").classList.toggle("active");
});



const level1Items = document.querySelectorAll('.cat-popup__list-1 ul li');
const level2Blocks = document.querySelectorAll('.cat-popup__list-2');
const level3Blocks = document.querySelectorAll('.cat-popup__list-3');

level1Items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    console.log("Hover on level 1 item", item); // Добавьте это для отладки
    const target = item.dataset.category;
    level2Blocks.forEach(block => {
      block.style.display = block.dataset.parent === target ? 'block' : 'none';
    });
    level3Blocks.forEach(block => block.style.display = 'none');
  });
});
console.log(level1Items);

document.querySelectorAll('.cat-popup__list-2 ul li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const target = item.dataset.subcategory;
    level3Blocks.forEach(block => {
      block.style.display = block.dataset.parent === target ? 'block' : 'none';
    });
  });
});


const catalogueContainer = document.querySelector('.catalogue-container');
const catPopup = document.querySelector('.cat-popup');
const catPopupContainer = document.querySelector('.cat-popup__container');
const headerContainer = document.querySelector('.header-container');

// Показываем меню, только если курсор на catalogueContainer
catalogueContainer.addEventListener('mouseenter', () => {
    catPopup.style.display = 'block';
});

// Скрываем меню, когда курсор выходит из catalogueContainer, .header-container-outer и .cat-popup
document.addEventListener('mousemove', (event) => {
    // Проверяем, находится ли курсор внутри catalogueContainer, .header-container-outer или .cat-popup
    const isCursorInside = catalogueContainer.contains(event.target) ||
                           headerContainer.contains(event.target) ||
                           catPopupContainer.contains(event.target);

    if (!isCursorInside) {
        catPopup.style.display = 'none';
    }
});
