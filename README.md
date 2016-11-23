# animations.css

[![npm](https://img.shields.io/npm/v/animations.css.svg)]() [![Bower](https://img.shields.io/bower/v/animations.css.svg)]() [![license](https://img.shields.io/github/license/rod/animations.css.svg)]()

> Packaged versions of [animations](http://www.justinaguilar.com/animations) by [Justin Aguilar](http://www.justinaguilar.com)

## Install

Install Animations via NPM

~~~ bash
$ npm install animations.css --save
~~~

or Bower

~~~ bash
$ bower install animations.css --save
~~~

## How it works

The CSS3 Animation Cheat Sheet is a set of preset, plug-and-play animations for your web projects. All you need to do is add the stylesheet to your website and apply the premade CSS classes to the elements you want animated.

The CSS3 Animation Cheat Sheet uses CSS3 `@keyframes` and works on [all the latest browsers](http://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp) (that's IE 10). Using CSS3 `@keyframes`, you don't have to worry about positioning the element to accommodate the animations - it will animate into place. Also for users with older browsers, the animated element will be visible and in place, even if the animation doesn't trigger. Below are instructions on how to get started.

Add the animation stylesheet to the `<head>` element of your webpage:

~~~ html
<link rel="stylesheet" href="css/animations.css">
~~~

- Replace `css` with the name of the directory where the animation stylesheet is.

Add an animation class to the element you want animated:

~~~ html
<div id="object" class="slideUp">
~~~

Replace `slideUp` with the desired animation class.

For entrance animations, you need to make them invisible by adding the `visibility: hidden` property to the animated element:

~~~ css
#object {
  background-color: #fe5652;
  visibility: hidden;
}
~~~

- `visibility: hidden;` is used to hide elements before the animation is activated.

> The values for these animations are relative to the element's size. That means bigger images have more exaggerated animations and smaller images have more subtle animations. While these animations are simple to implement, feel free to tweak values in the stylesheet to get the right effect.

## Adding effects

By default, these animations will trigger when the page loads - even if the element is further down the page - but by using jQuery there are many ways you can activate the animations. [See how you can use these animations on your website](http://www.justinaguilar.com/animations/scrolling.html).

Add jQuery to the `<head>` element of your webpage:

~~~ html
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
~~~

- Add this before the `</body>` tag to trigger the animation when the user scrolls to the element:

~~~ html
<script>
  $(window).scroll(function() {
    $('#animatedElement').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass("slideUp");
      }
    });
  });
</script>
~~~

- Replace `#animatedElement` with the ID or class of the element you want animated.
- Replace `slideUp` with an animation class.
- `400` represents the space between the element and the top of the screen. The animation activates when the element is `400px` from the top of the screen. Increase this number to make the animation activate sooner.

Add this before the `</body>` tag to trigger the animation when the user clicks on the element:

~~~ html
<script>
  $('#animatedElement').click(function() {
    $(this).addClass("slideUp");
  });
</script>
~~~

- Replace #animatedElement with the ID or class of the element you want animated.
- Replace slideUp with an animation class.

## License
MIT © [Rodney Dennis](https://github.com/rod)
