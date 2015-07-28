# popup_view

## Intro

This is popup view.

## Feature

* Use CSS3
* Does not require other JavaScript libraries
* Support IE9 up

## Method

* show(dom, show, hide)
  * dom[object] - popup you want show
  * show[function] - do something went popup show
  * hide[function] - do something went popup hide

* hide(dom, hide)
  * dom[object] - popup you want hide
  * hide[function] - do something went popup hide

## Usage

### HTML

```html
<!-- basic popup view structure -->
<div class="pop_up popup_hide">
    <div class="pop_up_close"></div>
</div>
```

### JavaScript

```javascript
var popupView = new popup();

popupView.show(document.querySelector('#popup_1'));
```

```javascript
var popupView = new popup();

popupView.show(document.querySelector('#popup_2'), function () {
    console.log('show do something');
});
```

```javascript
var popupView = new popup();

popupView.show(document.querySelector('#popup_3'), '', function () {
    console.log('CLOSE');
});
```
