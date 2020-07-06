'use strict';

//dependencies 
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');
var {src, dest, watch, series, parallel }= require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//File path variables

var files = {
    scssPath: 'app/scss/**/*.scss',
    jsPath: 'app/js/**/*.js'
}

//Sass task
    function scssTask(){
        return src(files.scssPath)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write('.'))
            .pipe(minifyCSS())
            //.pipe(rename({ suffix: '.min'}))
            .pipe(dest('dist')
        );


    }

    //JS task
    function jsTask(){
        return src(files.jsPath)
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(dest('dist')
        );

    }
//Cachebusting Task
/*const cbstring = new Date().getTime();
function cachebustTask(){
    return src (['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbstring))
        .pipe(dest('.')
    );
}
*/
//Watch Task - monitor files that we want to make any change
function watchTask(){
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask)
    );
}

//Default Task
exports.default = series(
    parallel(scssTask, jsTask),
    watchTask
);



/*
    //compile SCSS
gulp.task('compile_scss', function(){
    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS()
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});

//detect Changes in SCSS

gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC, ['compile_scss']);
});

//Run tasks
gulp.task('default', ['watch_scss']);


*/

/*function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask*/
  
