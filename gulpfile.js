var gulp = require('gulp');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');


var livereload = require('tiny-lr');

//Пути
var lessSrc = './src/less/*.less',
    lessDst = './src/css',
    lessSrcWatch = './src/less/**/*.less',
    cssSrc = './src/css/**/*.css',
    cssDst = './dist/css',
    jsSrc = './src/js/**/*.js',
    jsDst = './dist/js',
    htmlSrc = './src/*.html',
    htmlDst = './',
    imgSrc = './src/img/**/*',
    imgDst = './dist/img';

//JS билиоткеи
var bower_scripts = [
    './bower_components/jquery/dist/jquery.js'
];

//Стили для JS библиотек
var libs_styles = [
    ''
];

gulp.task('less', function () {
    gulp.src(lessSrc)
        .pipe(less())
        .pipe(autoprefix(['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']))
        .pipe(gulp.dest(lessDst));
});

gulp.task('css_production', function () {
    //сборка библиотек
    gulp.src(libs_styles)
        .pipe(concat('libs.css'))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssDst));

    //сбока всех стилей и минимизация
    gulp.src(lessSrc)
        .pipe(less())
        .pipe(autoprefix(['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']))
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssDst));
});

gulp.task('css_development', function () {
    //сбока всех стилей и минимизация
    gulp.src(cssSrc)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssDst))
});

gulp.task('js', function () {
    gulp.src(jsSrc)
        .pipe(concat('suite.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));

    gulp.src(bower_scripts)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});

gulp.task('img', function () {
    gulp.src(imgSrc)
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest(imgDst));
});

gulp.task('html', function () {
    gulp.src(htmlSrc)
        .pipe(gulp.dest(htmlDst));
});

gulp.task('livereload', function () {
    livereload = livereload();
    livereload.listen(4002);
});

gulp.task('server', function () {
    var express = require('express');
    var app = express();
    app.use(require('connect-livereload')({port: 4002}));
    app.use(express.static(__dirname));
    app.listen(4000);
});

gulp.task('watch', function () {
    gulp.watch([lessSrcWatch], ['less']);
    gulp.watch([htmlSrc], ['html']);
    gulp.watch([imgSrc], ['img']);
    gulp.watch([cssSrc], ['css_development']);
    gulp.watch(['./dist/**/*.*', './*.html'], notifyLiveReload);
});

gulp.task('default', ['css_production', 'js', 'img', 'html']);

gulp.task('dev', ['server', 'less', 'css_development' , 'js', 'img', 'html', 'livereload', 'watch']);

function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname, event.path);

    livereload.changed({
        body: {
            files: [fileName]
        }
    });

    console.log("file changed: ==" + fileName + "==");
}




