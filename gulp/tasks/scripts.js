/**
 * Created by raiseandfall on 5/14/14.
 */
var gulp = require('gulp');
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
	gulp.src('src/*.js')
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build'));
});