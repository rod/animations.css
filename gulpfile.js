const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const autoprefixer = require('autoprefixer');
const pkg = require('./package.json');

const banner = [
  '@charset "UTF-8";',
  '',
  '/*!',
  '==============================================',
  `${ pkg.description } - v${ pkg.version}`,
  '==============================================',
  '',
  'Made by Justin Aguilar',
  '',
  'www.justinaguilar.com/animations/',
  '',
  'Questions, comments, concerns, love letters:',
  'justin@justinaguilar.com',
  '',
  'Copyright 2016 Rodney Dennis',
  `Licensed under ${ pkg.license } (https://raw.githubusercontent.com/rod/animations.css/master/license)`,
  '==============================================',
  '*/',
  '',
  '',
].join('\n');

gulp.task('default', function() {
  return gulp.src('./src/**/*.css')
    .pipe($.header(banner, { pkg }))
    .pipe($.postcss([
      autoprefixer(),
    ]))
    .pipe(gulp.dest('./dist'))
    .pipe($.cleanCss())
    .pipe($.rename({ extname: ".min.css" }))
    .pipe(gulp.dest('./dist'));
});
