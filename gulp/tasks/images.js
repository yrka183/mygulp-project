module.exports = function () {
  $.gulp.task('images', function () {
    return $.gulp.src('./img/**/*.{png,jpg,svg}')
        .pipe($.gp.imagemin([
          $.gp.imagemin.jpegtran({progressive: true}),
          $.imageminJpg({
            loops: 5,
            min: 65,
            max: 70,
            quality: 'medium'
          }),
          $.gp.imagemin.imageOpti({optimizationLevel: 3}),
          $.gp.pngquant({quality: '65-70', speed: 5}),
          $.gp.imagemin.svgo()
        ]))
        .pipe($.gulp.dest('./build/img'));
  });
};