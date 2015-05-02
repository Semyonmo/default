var gulp = require('gulp');

gulp.task('build', ['webpack', 'view', 'style', 'images', 'assets', 'sprites']);