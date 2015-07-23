/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-07-23 17:29:42
 */

(function () {
    var popup = function(option) {
        var initDom;

        if (option && Object.keys(option).length) {
            var w = option.width || '100%',
                h = option.height || '100%',
                top = option.top || '0',
                left = option.left || '0',
                marginTop = option.marginTop || '0',
                marginLeft = option.marginLeft || '0';
            if (!option.dom) {
                console.error('not set dom parameters when you new popup()');
                return;
            }
            initDom = option.dom;
            initDom.style.width = w;
            initDom.style.height = h;
            initDom.style.top = top;
            initDom.style.left = left;
            initDom.style.marginTop = marginTop;
            initDom.style.marginLeft = marginLeft;
        }
        function hide(dom, dosomething) {
            if (!initDom && !dom) {
                console.error('hide function not set dom object');
                return;
            }
            if (dosomething) {
                dosomething();
            }
            var currentDom = dom || initDom;
            currentDom.className += ' ' + 'popup_hide';
        }
        function show(dom, dosomething) {
            if (!initDom && !dom) {
                console.error('show function not set dom object');
                return;
            }
            if (dosomething) {
                dosomething();
            }
            var currentDom = dom || initDom;
            var className = 'popup_hide',
                reg = new RegExp('(^|\\b)' +
                    className.split(' ').join('|') +
                    '(\\b|$)', 'gi');
            currentDom.className = currentDom.className.replace(reg, '').trim();
            var nodes = currentDom.childNodes;
            for (var i = nodes.length - 1; i >= 0; i--) {
                if (nodes[i].className === 'pop_up_close') {
                    var close = function (e) {
                        currentDom.className += ' ' + 'popup_hide';
                        nodes[i].removeEventListener('click', close);
                    };
                    nodes[i].addEventListener('click', close);
                    break;
                }
            }
        }
        this.show = show;
    };
    window.popup = popup;
})();