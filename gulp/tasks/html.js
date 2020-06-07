module.exports = function () {
    $.gulp.task("html",function () {
     return $.gulp.src('*.html')
     .pipe($.gulp.dest("./build"))
     .on('end',$.brsync.reload);//Перезапускаем браузер
    }); 
   };