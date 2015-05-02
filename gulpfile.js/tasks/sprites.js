var gulp = require('gulp');
var config = require('../config').sprites;
var spritesmith = require('gulp.spritesmith');


gulp.task('sprites', function () {
    var spriteData = gulp.src(config.src)
        .pipe(spritesmith(config.spritesmith));

    spriteData.img.pipe(gulp.dest(config.dest.icons));
    spriteData.css.pipe(gulp.dest(config.dest.src));
});