module.exports = function () {
   $.gulp.task("svg",function () {
       return $.gulp.src("img/**/*.svg")
       .pipe($.svgmin({
           js2svg:{
             pretty:true
                       }
       }))  
       .pipe($.cheerio({
           run: function ($) {
             $('[fill]').removeAttr('fill'),
             $('[stroke]').removeAttr('stroke'),
             $('[style]').removeAttr('style')  
           },
           parseOptions: {xmlMode: true}
       }))
       .pipe($.replace('&qt;','>'))
       .pipe($.svgSprite({
           mode: {
               symbol: {
                   sprite: "sprite.svg"
               }
           }
       }))
       .pipe($.gulp.dest("./build/img"))
   })
}