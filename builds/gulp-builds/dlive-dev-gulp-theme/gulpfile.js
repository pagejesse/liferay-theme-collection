'use strict';

var gulp = require('gulp'),
    liferayThemeTasks = require('liferay-theme-tasks'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

liferayThemeTasks.registerTasks({
  gulp: gulp
});

gulp.task('clean', function() {
  del('src/js/main*.js*');
})

gulp.task('concatScripts', ["clean"], function() {
  return gulp.src([
    'src/js/src/init.js', 
    'src/js/src/sticky.js',
    'src/js/src/quick-links-modal.js', 
    'src/js/src/report-issue-modal.js', 
    'src/js/src/search-placeholder.js',
    'src/js/src/landing-site.js'
  ])
  .pipe(concat("main.unminified.js"))
  .pipe(gulp.dest("src/js/"))
});

gulp.task('minifyScripts', ["concatScripts"], function() {
  return gulp.src("src/js/main.unminified.js")
  .pipe(uglify())
  .pipe(rename('main.js'))
  .pipe(gulp.dest('src/js/'));
});

gulp.task("default", ['minifyScripts'], function() {
  gulp.start("deploy");
});