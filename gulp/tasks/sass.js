module.exports = function () {
 $.gulp.task("sass",function () {
  return $.gulp.src('sass/style.scss')
  .pipe($.gp.plumber())//Проверка на ошибки
  .pipe($.gp.sourcemaps.init())//Инициализируем соурсмэп
  .pipe($.gp.sass())//Превращаем в обычный код
  .pipe($.gp.autoprefixer())//расставляем автопрефиксы
  .pipe($.gp.csso())//Минифицируем файл стилей
  .pipe($.gp.rename("style.min.css"))//Переименовываем файл
  .pipe($.gp.sourcemaps.write(""))//Записываем соурсмэпс
  .pipe($.gulp.dest("./build/css"))//Перебрасываем файл в конечную папку
  .pipe($.brsync.stream())//Перезапускаем браузер
 }); 
};