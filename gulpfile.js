const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Mountain'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Mountain/*.html', browserSync.reload);
    gulp.watch('Mountain/*.css', browserSync.reload);
  });
