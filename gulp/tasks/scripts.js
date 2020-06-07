const jsPath = [
//$.path.jQuery,
$.path.js
];

module.exports = function () {
    $.gulp.task("scripts",function () {
     return $.gulp.src("./js/**/*.js")
     .pipe($.gp.plumber())//Проверка на ошибки
     .pipe($.gp.sourcemaps.init())//Инициализируем соурсмэп
     .pipe($.gp.babel({
        presets: ['@babel/preset-env']
     }))//Превращаем код в ES5
     .pipe($.gp.concat("all.js"))//Соединяем в один файл, файлы js
     .pipe($.gp.uglify())//Минифицируем файл js
     .pipe($.gp.rename("all.min.js"))//Переименовываем файл
     .pipe($.gp.sourcemaps.write(""))//Записываем соурсмэпс
     .pipe($.gulp.dest("./build/js"))//Перебрасываем файл в конечную папку
     .pipe($.brsync.stream())//Перезапускаем браузер
    }); 
   };