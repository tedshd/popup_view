/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-07-23 17:29:42
 */

(function () {
      var popup = function (obj) {
        var maskClose = true;
        var pushStatus = false;
        var back2Close = false;
        var pushStateObj = {};
        if (!obj.dom) {
          console.error('popup: hide function not set dom object');
          return;
        }

        var dom = obj.dom;

        if (obj.maskClose != undefined) {
          maskClose = obj.maskClose;
        }

        if (obj.width != undefined) {
          dom.querySelector('.popup_container').style.width = obj.width;
        }

        if (obj.height != undefined) {
          dom.querySelector('.popup_container').style.height = obj.height;
        }

        if (obj.minWidth != undefined) {
          dom.querySelector('.popup_container').style.minWidth = obj.minWidth;
        }

        if (obj.minHeight != undefined) {
          dom.querySelector('.popup_container').style.minHeight = obj.minHeight;
        }

        if (obj.maxWidth != undefined) {
          dom.querySelector('.popup_container').style.maxWidth = obj.maxWidth;
        }

        if (obj.maxHeight != undefined) {
          dom.querySelector('.popup_container').style.maxHeight = obj.maxHeight;
        }

        if (maskClose) {
          dom.addEventListener('mousedown', function (e) {
            e.stopPropagation();
            hide();
          });
        }

        if (obj.pushStatus != undefined) {
          pushStatus = obj.pushStatus;
        }

        dom.querySelector('.popup_container').addEventListener('mousedown', function (e) {
          e.stopPropagation();
        });

        if (dom.querySelector('.popup_close')) {
          dom.querySelector('.popup_close').addEventListener('click', function (e) {
            e.stopPropagation();
            hide();
          });
        }
        function hide(dosomething) {
          if (dosomething) {
            dosomething(dom);
          }
          if (obj.dosomethingClose) {
            obj.dosomethingClose(dom);
          }
          if (back2Close) {
            back2Close = false;
            history.back();
          }
          dom.classList.add('popup_hide');
          document.body.classList.remove('popup_show');
        }

        function show(dosomethingShow, dosomethingClose) {
          if (pushStatus) {
            if (history.state) {
              pushStateObj = history.state;
            }
            pushStateObj['show'] = 1;
            window.history.pushState(pushStateObj, '', location.href);
            back2Close = true;
          }
          if (dosomethingShow) {
            dosomethingShow(dom);
          }
          if (obj.dosomethingShow) {
            obj.dosomethingShow(dom);
          }
          dom.classList.remove('popup_hide');
          document.body.classList.add('popup_show');
          var nodes = dom.childNodes;
        }

        window.addEventListener('popstate', function (e) {
          e.preventDefault();
          e.stopPropagation();
          if (back2Close) {
            back2Close = false;
            hide();
            delete pushStateObj['show']
            window.history.replaceState(pushStateObj, '', this.location.href);
            // history.back();
            return;
          }
        })

        this.show = show;
        this.hide = hide;
      };
      window.popup = popup;
    })();
