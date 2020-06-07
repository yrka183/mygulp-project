    global.$ = {
      gulp:require('gulp'),
      cheerio: require("gulp-cheerio"),
      replace: require("gulp-replace"),
      gp:require("gulp-load-plugins")(),
      brsync:require("browser-sync").create(),
      del:require("del"),
      babel:require("gulp-babel"),
      imagemin:require("imagemin"),
      mozjpeg : require('imagemin-mozjpeg'),
      pngquant : require('imagemin-pngquant'),
      imageOpti:require("imagemin-optipng"),
      imageminJpg:require("imagemin-jpeg-recompress"),
      svgmin:require("gulp-svgmin"),
      svgSprite: require("gulp-svg-sprite"),
      pug: require("gulp-pug"),
      prettify:require("gulp-html-prettify"),
      pugBeautify:require("gulp-pug-beautify"),
      pretty:require("pretty"),
      path: {
          config: require("./gulp/config.js"),
          jQuery: "./js/jquery.js",
          js: "./**/*.js",
          pug: "./**/*.pug"
      }
    };

    $.path.config.forEach(function (path) {
        require(path)();
    });
  
    //gulp build