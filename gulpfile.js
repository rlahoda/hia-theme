var basePaths = {
  src: '/',
  dest: '/',
};

var globs = {

  "styles": ['/scss/**/*.scss'],

}
var gulp = require('gulp');
var watchify = require('watchify');
var sass = require('gulp-sass');
var stylelint = require('gulp-stylelint');




//PostCSS process and SASS compilation
gulp.task('css', function() {
  var postcss = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');

  return gulp.src(['scss/**/*.scss'])
    .pipe(sass({
      errLogToConsole: true
    }))
    // PostCSS tasks after Sass compilation
    .pipe(postcss([
      autoprefixer({
        browsers: ['> 5%', 'last 2 versions', 'ie > 9']
      }) // Autoprefixes CSS properties for various browsers
      // any other PostCSS plugins to be run can be added in here
    ]))
  .pipe(gulp.dest('css/'))
});


gulp.task('watch', function() {
gulp.watch(['scss/**/*.scss'], ['css']);
});
gulp.task('build', ['css']);

gulp.task('default', ['build', 'watch']);
