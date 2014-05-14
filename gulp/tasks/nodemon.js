/**
 * Created by raiseandfall on 5/14/14.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
	nodemon({ script: 'index.js', ext: 'js' })
    .on('change', ['lint'])
    .on('restart', function() {
      console.log('node restarted');
    });
});
