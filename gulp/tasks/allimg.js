module.exports = function (){
 $.gulp.task("allimg",function(){
  return $.gulp.src("./img/**/*.{png,jpg,jpeg,gif,svg}")
         .pipe($.gulp.dest("./build/img"));
 });
};