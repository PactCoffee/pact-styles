var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');

// CSS concat, auto-prefix and minify
gulp.task('sass', function() {
	gulp.src(['./sass/*.scss'])
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefix('last 2 versions', {map:false}))
		.pipe(gulp.dest('./public/css/'))
});