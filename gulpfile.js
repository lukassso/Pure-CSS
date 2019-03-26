const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Storm'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Storm/*.html', browserSync.reload);
    gulp.watch('Storm/*.css', browserSync.reload);
  });
