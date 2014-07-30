var gulp = require('gulp');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var notify = require("gulp-notify");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var uncss = require('gulp-uncss');
var clean = require('gulp-clean');

//сервер
var connect = require('gulp-connect');
//склеивает все файлы
var concat = require('gulp-concat');

var lessSrc = './src/less/*.less',
    cssDst = './dist/css',
    cssSrc = './css/**/*.css',
    jsSrc = './src/js/**/*.js',
    jsDst = './dist/js',
    htmlSourseSrc = './src/*.html',
    htmlSrc = './*.html',
    htmlDst = './',
    imgSrc = './src/img/**/*',
    imgDst = './dist/img';

var minify = false;


gulp.task('less', function () {
    gulp.src(lessSrc)
        .pipe(less())
        .pipe(autoprefix(['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssDst))
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(rename({suffix: '.light'}))
        .pipe(gulp.dest(cssDst))
        .pipe(notify({ message: 'LESS task complete' }));
});

gulp.task('js', function () {
    gulp.src(jsSrc)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('img', function () {
    gulp.src(imgSrc)
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest(imgDst))
        .pipe(notify('Images task complete'));
});

gulp.task('html', function () {
    gulp.src(htmlSourseSrc)
        .pipe(gulpif(minify, minifyHTML({
            spare: true,
            conditionals: true,
            cdata: true
        })))
        .pipe(gulp.dest(htmlDst))
        .pipe(notify({ message: 'HTML task complete' }));
});

gulp.task('reload', function () {
    gulp.src('')
        .pipe(connect.reload())
        .pipe(notify('dist data reload'));
});

//server + watch powerful
gulp.task('server', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch([lessSrc], ['less']);
    gulp.watch([htmlSourseSrc], ['html']);
    gulp.watch([cssSrc], ['reload']);
    gulp.watch([htmlSrc], ['reload']);
    gulp.watch([imgSrc], ['reload']);
});

gulp.task('default', ['less', 'js', 'img', 'html']);
gulp.task('dev', ['server', 'default', 'watch']);



