const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Hearts'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Hearts/*.html', browserSync.reload);
    gulp.watch('Hearts/*.css', browserSync.reload);
  });
