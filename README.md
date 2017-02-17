# animations.css [![Travis](https://img.shields.io/travis/rod/animations.css.svg)]()

> CSS3 Animation Cheat Sheet

## Installation

Install via Bower

```bash
bower install --save-dev animations.css
```

Install via npm

```bash
npm install --save-dev animations.css
```

Install via yarn

```bash
yarn add --dev animations.css
```

## Basic Usage

Add the stylesheet to the `<head>` element

```html
<head>
  <link rel="stylesheet" href="animations.css">
</head>
```

Add one of the following animation classes to the element that you want to animate:

- entrance
  - `slideUp`, `slideDown`, `slideLeft`, `slideRight`, `slideExpand`, `expandUp`, `fadeIn`, `expandOpen`, `bigEntrance`, `hatch`

- misc
  - `bounce`, `pulse`, `floating`, `tossing`, `pullUp`, `pullDown`, `stretchLeft`, `stretchRight`

For example:

```html
<div class="bounce">
  ...
</div>
```

When using entrance animations, you need to apply a `visibility: hidden` property to the animated element to hide it before the animation is activated.

The values for these animations are relative to the element's size. That means bigger images have more exaggerated animations and smaller images have more subtle animations.

## Usage

By default, these animations will trigger on page load, which means animations further down the page may not be seen. Luckily, there are many ways you can [activate the animations on scroll](http://www.justinaguilar.com/animations/scrolling.html).

To apply the `slideUp` animation to an element with an id of `myElement` when it is `400px` from the top of the browser window you could use the following:

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript">
  $(window).scroll(function() {
    $('#myElement').each(function(){
    var elementPosition = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (elementPosition < topOfWindow + 400) {
        $(this).addClass("slideUp");
      }
    });
  });
</script>
```

To make `#myElement` `bounce` when clicked you could use the following:

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
  $('#myElement').click(function() {
    $(this).addClass("bounce");
  });
</script>
```

## License
MIT © [Rodney Dennis](https://github.com/rod)
