var 
    gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    minifyJs= require('gulp-minify')

gulp.task('minify-css', function() {
  return gulp.src('public-dev/styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public-prod/styles/*.css'))
})

gulp.task('scripts', function(){
    return gulp.src('public-dev/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public-dev/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public-prod/js'))
})

gulp.task('watch', function(){
    gulp.watch('/public-prod/js/*.js', ['scripts'])
    gulp.watch('public-prod/styles/*.css', ['minify-css'])
})

gulp.task('start', function(){
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: {'NODE_ENV': 'development'}
    })
})

gulp.task('default', ['minify-css', 'scripts', 'start', 'watch'])