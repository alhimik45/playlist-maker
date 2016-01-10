var gulp = require('gulp');
var zip = require('gulp-zip');
var shell = require('gulp-shell');

gulp.task('default', function() {
	return gulp.src('app/*')
		.pipe(zip('playlist-maker.nw'))
		.pipe(gulp.dest('compiled'));
});

gulp.task('run',['default'], shell.task('nw compiled/playlist-maker.nw'));