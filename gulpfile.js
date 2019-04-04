const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Ocean'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Ocean/*.html', browserSync.reload);
    gulp.watch('Ocean/*.css', browserSync.reload);
  });
