var jade       = require('gulp-jade');
var path       = require('path');
var gulp       = require('gulp');
var fs         = require('fs');
var handleErrors = require('../util/handleErrors');
var config     = require('../config').jade;

gulp.task('jade', function() {
  return gulp.src(config.src)
    .pipe(jade({
        pretty: true,
        locals: JSON.parse(fs.readFileSync(config.data, 'utf8'))
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
