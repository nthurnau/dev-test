var 
    gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    minifyJs= require('gulp-minify'),
    concat = require('gulp-concat'),
    nodemon = require('gulp-nodemon'),
    rename = require('gulp-rename')

gulp.task('minify-css', function() {
  return gulp.src('public-dev/styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public-prod/styles/*.css'));
})

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(minifyJs())
        .pipe(gulp.dest('dist/js'));
})

gulp.task('start', function () {
  nodemon({ 
      script: 'server.js',
      ext: 'html js',
      env: {'NODE_ENV': 'development'}
      })
    .on('restart', function () {
      console.log('restarted!')  
  })
})  

gulp.task('watch', function(){
    gulp.watch('/public-prod/js/*.js', ['scripts'])
    gulp.watch('public-prod/styles/*.css', ['minify-css'])
})

gulp.task('default', ['minify-css', 'scripts', 'start', 'watch'])