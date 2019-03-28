const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Rock'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Rock/*.html', browserSync.reload);
    gulp.watch('Rock/*.css', browserSync.reload);
  });
