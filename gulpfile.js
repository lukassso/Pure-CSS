const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Laptop'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Laptop/*.html', browserSync.reload);
    gulp.watch('Laptop/*.css', browserSync.reload);
  });
