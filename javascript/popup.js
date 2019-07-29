/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-07-23 17:29:42
 */

(function() {
  var popup = function() {
    function hide(dom, dosomething) {
      if (!dom) {
        console.error('popup: hide function not set dom object');
        return;
      }
      if (dosomething) {
        dosomething();
      }
      dom.classList.add('popup_hide');
    }

    function show(dom, dosomethingShow, dosomethingClose) {
      if (!dom) {
        console.error('popup: show function not set dom object');
        return;
      }
      if (dosomethingShow) {
        dosomethingShow();
      }
      dom.classList.remove('popup_hide');
      var nodes = dom.childNodes;
      if (dom.querySelector('popup_close')) {
        dom.querySelector('popup_close').addEventListener('click', function() {
          if (dosomethingClose) {
            dosomethingClose();
          }
          dom.classList.add('popup_hide');
        });
      }
    }
    this.show = show;
    this.hide = hide;
  };
  window.popup = popup;
})();