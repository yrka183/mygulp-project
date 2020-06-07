module.exports = function () {
    $.gulp.task("server",function () {
         $.brsync.init({
            server: {
              baseDir: "./build"
            }
        });
        $.gulp.watch("sass/**/*.scss", $.gulp.series("sass"))
        $.gulp.watch("*.html", $.gulp.series("html")) 
        $.gulp.watch("*.pug",$.gulp.series("pug"))
        $.gulp.watch("js/**/*.js", $.gulp.series("scripts"))
        $.gulp.watch("img/**/*.{svg,png,jpeg,jpg}", $.gulp.series("allimg"))
     });
   };