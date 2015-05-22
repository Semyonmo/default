var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var less = require('gulp-less');
var stylus = require('gulp-stylus');
var handleErrors = require('../util/handleErrors');
var config = require('../config').style;
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var eventStream = require('event-stream');
//var csso = require('gulp-csso');

gulp.task('style', ['images'], function () {
    var stream = {
        less: gulp.src(config.src.less).pipe(less(config.settings.less)).on('error', handleErrors),
        scss: gulp.src(config.src.scss).pipe(sass(config.settings.scss)).on('error', handleErrors),
        stylus: gulp.src(config.src.stylus).pipe(stylus(config.settings.stylus)).on('error', handleErrors)
    };

    return eventStream
        .merge(stream.scss, stream.less, stream.stylus)
        .pipe(concat('style.css'))
        .pipe(autoprefixer({browsers: ['last 2 version']}))
        //.pipe(csso())
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream: true}));
});

