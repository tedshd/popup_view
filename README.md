# popup_view

## Intro

This is popup view.

Use it like dialog or lightbox.

## Feature

* Use CSS3
* Use Flex
* Does not require other JavaScript libraries
* Support IE9 up

## Argument

| Argument         | Type            | Require | Description | Example |
| ---              | ---             | ---     | ---         | ---     |
| dom              | DOM Object      | require | popup dom | `document.querySelector('#popup')` |
| width            | STRING          | option  | popup content width | `'300px'` |
| height           | STRING          | option  | popup content height | `'300px'` |
| minWidth         | STRING          | option  | popup content min width | `'300px'` |
| minHeight        | STRING          | option  | popup content min height | `'300px'` |
| dosomethingClose | FUNCTION Object | option  | do something when popup close | `function(dom) {console.log('show popup dom', dom)}` |

## Method

* show(show, hide)
  * dom[object] - popup you want show
  * show[function] - do something went popup show
  * hide[function] - do something went popup hide

* hide(hide)
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
var popupView = new popup({
  dom: document.querySelector('#popup_1')
});

popupView.show();
```

```javascript
var popupView = new popup({
  dom: document.querySelector('#popup_2')
});

popupView.show(function () {
    console.log('show do something');
});
```

```javascript
var popupView = new popup({
  dom: document.querySelector('#popup_3')
});

popupView.show('', function () {
    console.log('CLOSE');
});
```
