var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");
var del = require("del");

gulp.task("clean-scss", function(){
    del("dist/css")
});

gulp.task("clean-html", function(){
    del("dist/index.html")
});

gulp.task('move-scss',['clean-scss'],function(){
    return gulp.src('./source/scss/**/*.scss')
    			 .pipe(sass())
           .pipe(gulp.dest('./dist/css'));
});

gulp.task('move-html',['clean-html'],function(){
    return gulp.src('./source/**/*.html')
    			 .pipe(htmlmin({collapseWhitespace: true}))
           .pipe(gulp.dest('./dist/'));
});


gulp.task('background',function(){
    gulp.watch('./source/**/*.scss'['move-scss']);
    gulp.watch('./source/**/*.html'['move-html']);
});