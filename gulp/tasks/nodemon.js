/**
 * Created by raiseandfall on 5/14/14.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
	nodemon({ script: 'example.js', ext: 'js', watch: ['./src/', 'example.js'] })
    .on('change', ['lint'])
    .on('restart', function() {
      console.log('node restarted');
    });
});
