!function(){var o=function(){function o(o,e){return o?(e&&e(),void o.classList.add("popup_hide")):void console.error("popup: hide function not set dom object")}function e(o,e,i){if(!o)return void console.error("popup: show function not set dom object");e&&e(),o.classList.remove("popup_hide");o.childNodes;o.querySelector("popup_close")&&o.querySelector("popup_close").addEventListener("click",function(){i&&i(),o.classList.add("popup_hide")})}this.show=e,this.hide=o};window.popup=o}();