// imports:
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


// functions
function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

// exports:
exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}