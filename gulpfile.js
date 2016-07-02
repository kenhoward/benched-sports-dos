'use strict';

var gulp = require('gulp'),
  del = require('del'),
  config = require('./gulp.config')(),
  bs = require('browser-sync').create(),
  $ = require('gulp-load-plugins')();

// gulp.task('scripts:development', function() {
//     return gulp.src('./app/scripts/*.js')
//         .pipe($.concat('app.js'))
//         .pipe(gulp.dest('./dev'))
//         .pipe(bs.stream());
// });

// gulp.task('scripts:build', ['scripts:vendor', 'scripts:development'], function() {
//     return gulp.src([
//         './dev/vendor.js',
//         './dev/app.js'
//     ])
//         .pipe($.concat('app.js'))
//         .pipe($.uglify())
//         .pipe($.rename('app.min.js'))
//         .pipe(gulp.dest('./dist'));
// });

gulp.task('styles:development', function() {
    return gulp.src(config.sass + 'main.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('./public/css'))
        .pipe(bs.stream());
});

// gulp.task('styles:build', ['styles:development'], function() {
//     return gulp.src('./dev/*.css')
//         .pipe($.cssnano())
//         .pipe($.rename('app.min.css'))
//         .pipe(gulp.dest('./dist'));
// });

// gulp.task('server', function() {
//     bs.init({
//         server: {
//             baseDir: './'
//         }
//     });
//     gulp.watch(config.sass + '**/*.js', ['styles:development']);
//     gulp.watch('./app/scripts/*.js', ['scripts:development']);
//     gulp.watch('./*.html', bs.reload);
// });

gulp.task('watch', function() {
  gulp.watch(config.sass + '**/*.js', ['styles:development']);
};

gulp.task('default', ['styles:development', 'watch']);
