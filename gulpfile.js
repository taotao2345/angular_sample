'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var bytediff = require('gulp-bytediff');
var uglify = require('gulp-uglify');

var jsFilePaths = [
  'app/components/*.js',
  'app/layout/*.js',
  'app/order/*.js',
  'app/services/*.js'
];

gulp.task('js', function() {
  return gulp.src(jsFilePaths)
    .pipe(sourcemaps.init())
    .pipe(concat('all.min.js', {
      newLine: ';'
    }))
    .pipe(ngAnnotate({
      add: true
    }))
    .pipe(bytediff.start())
    .pipe(uglify({
      mangle: true
    }))
    .pipe(bytediff.stop())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('watch', function() {
  gulp.watch(jsFilePaths, ['js']);
});
