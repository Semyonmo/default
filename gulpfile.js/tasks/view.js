var jade = require('gulp-jade');
var path = require('path');
var gulp = require('gulp');
var fs = require('fs');
var handleErrors = require('../util/handleErrors');
var configView = require('../config').view;
var configAngularTemplates = require('../config').angularTemplates;
var configAngularComponentsTemplates = require('../config').angularComponentTemplates;

var templateCache = require('gulp-angular-templatecache');

gulp.task('view', ['angular-templates', 'angular-components-templates'], function () {
    return gulp.src(configView.src)
        .pipe(jade({
            pretty: true,
            locals: JSON.parse(fs.readFileSync(configView.data, 'utf8'))
        }))
        .on('error', handleErrors)
        .pipe(gulp.dest(configView.dest));
});


gulp.task('angular-templates', function () {
    return gulp.src(configAngularTemplates.src)
        .pipe(jade({
            pretty: true
        }))
        .on('error', handleErrors)
        .pipe(templateCache())
        .pipe(gulp.dest(configAngularTemplates.dest));
});

gulp.task('angular-components-templates', function () {
    return gulp.src(configAngularComponentsTemplates.src)
        .pipe(jade({
            pretty: true
        }))
        .on('error', handleErrors)
        .pipe(templateCache())
        .pipe(gulp.dest(configAngularComponentsTemplates.dest));
});



