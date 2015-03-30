/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.less.files, ['less']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.jade.files, ['jade']);
    gulp.watch(config.assets.files, ['assets']);
    gulp.watch(config.sprites.files, ['sprites']);
});