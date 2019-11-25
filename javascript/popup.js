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

    if (obj.width) {
      dom.querySelector('.popup_container').style.width = obj.width;
    }

    if (obj.height) {
      dom.querySelector('.popup_container').style.height = obj.height;
    }

    if (obj.minWidth) {
      dom.querySelector('.popup_container').style.minWidth = obj.minWidth;
    }

    if (obj.minHeight) {
      dom.querySelector('.popup_container').style.minHeight = obj.minHeight;
    }

    dom.addEventListener('mousedown', function (e) {
      hide(obj.dosomethingClose);
    });

    dom.querySelector('.popup_container').addEventListener('mousedown', function (e) {
      e.stopPropagation();
    });

    if (dom.querySelector('.popup_close')) {
      dom.querySelector('.popup_close').addEventListener('click', function() {
        hide(obj.dosomethingClose);
      });
    }

    function hide(dosomething) {
      if (dosomething) {
        dosomething(dom);
      }
      dom.classList.add('popup_hide');
      document.body.classList.remove('popup_show');
    }

    function show(dosomethingShow, dosomethingClose) {
      if (dosomethingShow) {
        dosomethingShow(dom);
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