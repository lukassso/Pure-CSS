const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Zebra'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Zebra/*.html', browserSync.reload);
    gulp.watch('Zebra/*.css', browserSync.reload);
  });
