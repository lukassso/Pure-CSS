const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Avocado'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Avocado/*.html', browserSync.reload);
    gulp.watch('Avocado/*.css', browserSync.reload);
  });
