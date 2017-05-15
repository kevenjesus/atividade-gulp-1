var gulp = require("gulp");
var del = require("del");
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');

gulp.task("clean", function(){
    del("./dist")
});

gulp.task('move-scss', function () {
    return gulp
        .src('./source/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

//gulp.task('move-scss',function(){
//    return gulp
//        .src('./source/scss/*.scss')
//        .pipe(gulp.dest('./dist/css'));
//});

gulp.task('move-html', function() {
    return gulp
        .src('./source/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

//gulp.task('move-html',function(){
//    return gulp
//        .src('./source/*.html')
//        .pipe(gulp.dest('./dist'));
//});


gulp.task('background',['move-scss','move-html'],function(){
    gulp.watch('./source/scss/*.scss',['move-scss']);
    gulp.watch('./source/*.html',['move-html']);
});