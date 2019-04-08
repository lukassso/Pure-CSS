const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Pen'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Pen/*.html', browserSync.reload);
    gulp.watch('Pen/*.css', browserSync.reload);
  });
