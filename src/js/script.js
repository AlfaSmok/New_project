
//select header
const selectHeader = document.querySelector('.select__header');
const selectBody = document.querySelector('.select__body');
const selectItem = document.querySelectorAll('.select__item');
const selectSpan = document.querySelector('.select__title');
const selectImg = document.querySelector('.select__header img');

selectHeader.addEventListener('click', () => {
  if (selectBody.classList.contains('select__body--active')) {
    selectBody.classList.remove('select__body--active');
    selectImg.style.transform = 'rotate(0deg)';
    selectBody.style.maxHeight = null;
  } else {
    selectBody.classList.add('select__body--active');
    selectImg.style.transform = 'rotate(180deg)';
    selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
  }
});

selectItem.forEach((item, i) => {
  item.addEventListener('click', () => {
    selectSpan.textContent = item.textContent;
    selectBody.classList.remove('select__body--active');
    selectImg.style.transform = 'rotate(0deg)';
    selectBody.style.maxHeight = null;
  });
});


//maps
let center = [59.959906306451806,30.280773320098888];

function init() {
  let map = new ymaps.Map('map-element', {
    center: center,
    zoom: 15
  });

  let playsmark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map/mark-cart.svg',
    iconImageSize: [70, 100],
    iconImageOffset: [-30, -90]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты

  map.geoObjects.add(playsmark);
};

ymaps.ready(init);


//mobile menu
const headerMobile = document.querySelector('.header__mobile'),
      burger = document.querySelector('.header__burger'),
      cross = document.querySelector('.header__cross'),
      body = document.querySelector('body');

burger.addEventListener('click', () => {
  headerMobile.classList.toggle('active');
  burger.style.display = 'none';
  cross.style.display = 'block';
  body.classList.add('noscroll')
});

cross.addEventListener('click', () => {
  headerMobile.classList.toggle('active');
  burger.style.display = 'block';
  cross.style.display = 'none';
  body.classList.remove('noscroll');
});

//modal
const modal = document.querySelector('.modal'),
      modalButtons = document.querySelectorAll('.button__modal');

modalButtons.forEach((item) => {
  item.addEventListener('click', () => {
    modal.classList.add('active');
    body.classList.add('noscroll');
  });
});

modal.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modal.classList.remove('active');
    body.classList.remove('noscroll');
  }
});


//slider

const swiper = new Swiper('.slider', {
  loop: true,

  // pagination
  pagination: {
    el: '.slider__pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__arrow-right',
    prevEl: '.slider__arrow-left',
  }

});