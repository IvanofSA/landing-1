///////////Заявка на скидку///////////////
var saleMe = (function () {

var init = function () {
    _setUpListners();
    // то, что должно произойти сразу
    };
var _setUpListners = function () {
$('#application').on('submit', _submitForm);
    };

var _submitForm = function (ev) {
  console.log('отправка формы');
  ev.preventDefault();

  var form = $(this),
    url = 'sale.php',
    defObj = _ajaxForm(form, url);

};

var _ajaxForm = function (form, url) {
   console.log('ajax запрос');
  if (!validation.validateForm(form)) return false;


};

return {
  init: init

};

})();
saleMe.init();


////////////Заявка на скидку///////////////
var callMe = (function () {

var init = function () {
  _setUpListners();
  // то, что должно произойти сразу
  };
var _setUpListners = function () {
$('#feedback-form').on('submit', _submitForm);
  };
var _submitForm = function (ev) {
console.log('отправка формы');
ev.preventDefault();

var form = $(this),
  url = 'call.php',
  defObj = _ajaxForm(form, url);

};

var _ajaxForm = function (form, url) {
 console.log('ajax запрос');
if (!validation.validateForm(form)) return false;


};

return {
init: init

};

})();
callMe.init();

////////////отправить катало//////////
var catalogMe = (function () {

var init = function () {
    _setUpListners();
    // то, что должно произойти сразу
    };
var _setUpListners = function () {
$('#catalog__send').on('submit', _submitForm);
    };

var _submitForm = function (ev) {
  console.log('отправка формы');
  ev.preventDefault();

  var form = $(this),
    url = 'catalog.php',
    defObj = _ajaxForm(form, url);

};

var _ajaxForm = function (form, url) {
   console.log('ajax запрос');
  if (!validation.validateForm(form)) return false;


};

return {
  init: init

};

})();
catalogMe.init();


////////////Консультация////////

var consultationMe = (function () {

var init = function () {
    _setUpListners();
    // то, что должно произойти сразу
    };
var _setUpListners = function () {
$('#consultation').on('submit', _submitForm);
    };

var _submitForm = function (ev) {
  console.log('отправка формы');
  ev.preventDefault();

  var form = $(this),
    url = 'consultation.php',
    defObj = _ajaxForm(form, url);

};

var _ajaxForm = function (form, url) {
   console.log('ajax запрос');
  if (!validation.validateForm(form)) return false;


};

return {
  init: init

};

})();
consultationMe.init();


////////////POPUP///////////////

var popupModule = (function () {

var init = function () {
    _setUpListners();
    // то, что должно произойти сразу
    };

var _setUpListners = function () {
      $('.callback__btn').on('click', _showModal);

    };

  var _showModal = function (ev) {
    //console.log('Вызов модального окна');
    ev.preventDefault();
    var divPopup = $('.popup'),
      form = divPopup.find('.call__form');
    divPopup.bPopup({
      speed: 350,
      transition: 'slideIn',
      transitionClose: 'slideBack',
      onClose: function () {
        form.trigger("reset");
      }
    });
      };
return {
  init: init

};

})();

popupModule.init();


var myLatlng = new google.maps.LatLng(59.894204, 30.447749);
var myCenter = new google.maps.LatLng(59.894514, 30.459865);

var myOptions = {
  zoom: 15,
  scrollwheel: true,
  center: myCenter,
  styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6195a0"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#e6f3d6"},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f4d2c5"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#f4f4f4"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#787878"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#eaf6f8"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#eaf6f8"}]}],
  mapTypeControlOptions: {
    position: google.maps.ControlPosition.BOTTOM_LEFT
  }
}
var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

var markerImage = new google.maps.MarkerImage(
    'app/img/background/marka.png',
    new google.maps.Size(210,136),
    new google.maps.Point(0,0),
    new google.maps.Point(0,33)
);

var marker = new google.maps.Marker({
  icon: markerImage,
  position: myLatlng,
  map: map,
  title:"Hello World!"
});
$(document).ready(function(){
  $('.sliders__controls-buttons').on('click', function(e){
    e.preventDefault();

    var
      $this = $(this),
      container = $this.closest('.sliders'),
      list = container.find('.my__slider-list'),
      items = container.find('.my__sliders-item'),
      activeSlide = items.filter('.active'),
      nextSlide = activeSlide.next(),
      prevSlide = activeSlide.prev(),
      firstSlide = items.first(),
      lastSlide = items.last(),
      sliderOffset = container.offset().left,
      reqPos = 0;

    if ($(this).hasClass('sliders__controls-buttons-next')) {

      if (nextSlide.length) {
        findReqPos(nextSlide);
        removeActiveClass(nextSlide);
      } else {
        findReqPos(firstSlide);;
        removeActiveClass(firstSlide);
      }
    } else {

      if (prevSlide.length) {
        findReqPos(prevSlide);
        removeActiveClass(prevSlide);
      } else {
        findReqPos(lastSlide);;
        removeActiveClass(lastSlide);
      }
    }
    list.css('left', '-=' + reqPos + 'px');

  function  removeActiveClass (reqSlide) {
    reqSlide.addClass('active').siblings().removeClass('active');
  }
  function findReqPos (slide) {
    reqPos = slide.offset().left - sliderOffset;
  }

  });
});
$(document).ready(function(){
  $(".phone").mask("+7 (999) 999-9999");
  $('.controls__tabs-link').on('click',function(e){
    e.preventDefault();

    var item = $(this).closest('.controls__tabs-item'),
      contentItem = $('.tabs__item'),
      itemPosition = item.data('class');
    contentItem.filter('.tabs__item_' + itemPosition)
        .add(item)
        .addClass('active')
        .siblings()
        .removeClass('active');


  })
});
var validation = (function () {

  var init = function () {
	    _setUpListners();
	    // то, что должно произойти сразу
  	  };

  var _setUpListners = function () {
  	//чистим поля от ошибок
  	 $('form').on('keydown', '.has-error', _removeError);
    $('form').on('reset', _clearForm);
    };

  var _removeError = function () {

  	$(this).removeClass('has-error');
  	$(this).find('.form__input').removeClass('has-error');

  };
  var _clearForm = function (form) {
  	var form = $(this);
  	form.find('input, textarea').trigger('hideTooltip');
  	form.find('.has-error').removeClass('has-error');
  };

//создает тултипы
  var _createQtip = function (element, position) {

  	// позиция
	if(position === 'right'){
		position = {
			my: 'left center',
			at: 'right center'
		};
	}else{
		position = {
			my: 'right center',
			at: 'left center',
			adjust: {
				method: 'shift none'
			}

		}
	}

	// создание тултипа
  $('.selector').qtip({
    style: { classes: 'myCustomClass' }
    });
	element.qtip({
		content: {
			text: function () {
				return $(this).attr('qtip-content');
			}
		},
		show: {
			event: 'show'
		},
		hide: {
			event: 'keydown hideTooltip'

		},
		position : position,
		style: {
			classes: 'qtip-red qtip-shadow',
			tip: {
				height: 10,
				width: 16
			}
		}
	}).trigger('show');

  };

 var validateForm = function (form) {

 	var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
 	    valid = true;
 	    //пройдемся по всем эелемантам формы
 	 $.each(elements, function (index, val) {
 	 	var element = $(val),
 	 	    val = element.val(),
 	 	    pos = element.attr('qtip-position');

 	 	if (val.length === 0) {
 	 		//красный фон
 	 	  element.addClass('has-error');
 	 	 _createQtip(element, pos);
 	 	 valid = false;
 	 	}

 	 });

 	 return valid;
 };

  return {
	  init: init,
	  validateForm: validateForm

  };

})();

validation.init();
