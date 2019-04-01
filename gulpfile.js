const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Planet'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Planet/*.html', browserSync.reload);
    gulp.watch('Planet/*.css', browserSync.reload);
  });
