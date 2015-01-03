var changed    = require('gulp-changed');
var gulp       = require('gulp');
var config     = require('../config').assets;


gulp.task('assets', function() {
  	config.bundleConfigs.forEach(function(item) {
	    
	    return gulp.src(item.src)
	    .pipe(changed(item.dest)) // Ignore unchanged files
	    .pipe(gulp.dest(item.dest));
  	});
});