module.exports = function () {
    $.gulp.task("build", $.gulp.series("clean",
                                       "copy",
                                       "sass",
                                       "scripts",
                                       "allimg",
                                       "webp",
                                       "svg",
                                       "pug",
                                       "server"))
   };