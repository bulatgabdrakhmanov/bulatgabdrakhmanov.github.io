const gulp          = require("gulp");
const sass          = require("gulp-sass");
const gcmq          = require("gulp-group-css-media-queries");
const csso          = require("gulp-csso");
const rename        = require("gulp-rename");
const autoprefixer  = require("gulp-autoprefixer");
const browserify    = require("browserify");
const tsify         = require("tsify");
const source        = require("vinyl-source-stream");

const inputFolder   = "dev";
const outputFolder  = "prod";

gulp.task("styles", function() {
    return gulp.src(inputFolder + "/styles/main.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie >= 10', 'Firefox > 20'],
            cascade: true,
            grid: true
        }))
        .pipe(gcmq())
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(outputFolder + "/styles"));
});

gulp.task("scripts", function() {
    const jsFiles = gulp.src(inputFolder + "/scripts/**/*.js")
        .pipe(gulp.dest(outputFolder + "/scripts"));

    return browserify({
        basedir: '.',
        debug: true,
        entries: [inputFolder + '/scripts/main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify, {noImplicitAny: true})
        .bundle().on('error', (e) => console.log(e))
        .pipe(source('main.js'))
        .pipe(gulp.dest(outputFolder + "/scripts"));
});

gulp.task("staticFiles", function(done) {
    const fonts = gulp.src(inputFolder + "/fonts/**/*")
        .pipe(gulp.dest(outputFolder + "/fonts"));

    const img = gulp.src(inputFolder + "/img/**/*")
        .pipe(gulp.dest(outputFolder + "/img"));

    done();
});

gulp.task("build", gulp.parallel("styles", "scripts", "staticFiles"));

gulp.task("watch", function(done) {
    (gulp.series("build"))();
    gulp.watch(inputFolder + "/styles/**/*.scss", gulp.parallel("styles"));
    gulp.watch(inputFolder + "/scripts/**/*.ts", gulp.parallel("scripts"));
    gulp.watch([inputFolder + "/img/**/*", inputFolder + "/fonts/**/*"], gulp.parallel("staticFiles"));
    done();
});