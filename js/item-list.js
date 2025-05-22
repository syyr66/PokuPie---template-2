
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


$(function() {
  const slider = $("#products__price-slider");

  const min = +slider.data("min");
  const max = +slider.data("max");

  slider.slider({
    range: true,
    min: min,
    max: max,
    values: [min, max],
    slide: function(event, ui) {
      $("#price-min").text(ui.values[0].toLocaleString('uk-UA') + " грн.");
      $("#price-max").text(ui.values[1].toLocaleString('uk-UA') + " грн.");

      $("#price-min-input").val(ui.values[0]);
      $("#price-max-input").val(ui.values[1]);
    }
  });

  const values = slider.slider("values");
  $("#price-min").text(values[0].toLocaleString('uk-UA') + " грн.");
  $("#price-max").text(values[1].toLocaleString('uk-UA') + " грн.");

  $("#price-min-input").val(values[0]);
  $("#price-max-input").val(values[1]);
});



$(".products__leftbar-item-top").click(function (e) {
  $(this).closest(".products__leftbar-item").toggleClass("active");
});
