var gulp = require('gulp');
var config = require('../config');
var watch = require('gulp-watch');
var _ = require('lodash');

gulp.task('watch', ['setWatch', 'browserSync'], function () {
    var watched = [
        {
            PATH: config.view.files,
            task: "view"
        },
        {
            PATH: config.style.src.less,
            task: "style"
        },
        {
            PATH: config.style.src.scss,
            task: "style"
        },
        {
            PATH: config.images.src,
            task: "images"
        },
        {
            PATH: config.assets.src,
            task: "assets"
        },
        {
            PATH: config.sprites.src,
            task: "sprites"
        },
        {
            PATH: config.angularTemplates.src,
            task: "angular-templates"
        },
        {
            PATH: config.angularComponentTemplates.src,
            task: "angular-components-templates"
        }
    ];

    _.forEach(watched, function (watched) {
        watch(watched.PATH , function () {
            gulp.start(watched.task);
        });
    });
});