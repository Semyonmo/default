var gulp = require('gulp');

gulp.task('build', ['browserify', 'jade', 'sass', 'images', 'assets', 'sprites']);