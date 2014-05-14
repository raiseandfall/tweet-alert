/**
 * Created by raiseandfall on 5/14/14.
 */

var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('lint', function () {
  gulp.src('./src/*.js')
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'));
});