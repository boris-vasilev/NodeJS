/**
 * Created by boris on 6/7/2017.
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
    return gulp.src('content/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('content/min'));
});