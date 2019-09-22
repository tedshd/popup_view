/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-07-23 17:29:42
 */

(function() {
  var popup = function(obj) {
    if (!obj.dom) {
      console.error('popup: hide function not set dom object');
      return;
    }
    var dom = obj.dom;

    dom.addEventListener('click', function (e) {
      dom.classList.add('popup_hide');
    });

    dom.querySelector('.popup_container').addEventListener('click', function (e) {
      e.stopPropagation();
    })

    if (dom.querySelector('.popup_close')) {
      dom.querySelector('.popup_close').addEventListener('click', function() {
        hide(obj.dosomethingClose);
      });
    }

    function hide(dosomething) {
      if (dosomething) {
        dosomething();
      }
      dom.classList.add('popup_hide');
      document.body.classList.remove('popup_show');
    }

    function show(dosomethingShow, dosomethingClose) {
      if (dosomethingShow) {
        dosomethingShow();
      }
      dom.classList.remove('popup_hide');
      document.body.classList.add('popup_show');
      var nodes = dom.childNodes;
      if (dom.querySelector('.popup_close')) {
        dom.querySelector('.popup_close').addEventListener('click', function() {
          hide(dosomethingClose);
        });
      }
    }
    this.show = show;
    this.hide = hide;
  };
  window.popup = popup;
})();