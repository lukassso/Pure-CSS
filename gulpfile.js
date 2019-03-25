const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
    baseDir: './Sapphire'
    },
  })
});
gulp.task('watch', ['browserSync'], () => {
    gulp.watch('Sapphire/*.html', browserSync.reload);
    gulp.watch('Sapphire/*.css', browserSync.reload);
  });
