var gulp = require('gulp');
var beeper = require('beeper');
var c = require('ansi-colors');

var sass = require('gulp-sass');
var notify = require('gulp-notify');

var browserSync = require('browser-sync');

var cp = require('child_process');

/**
 * Build the Jekyll Site
 */
 gulp.task('js-build', function (done) {
    return cp.spawn('webpack', ['--watch'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('jekyll', ['build', '--incremental'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
 gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
 gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        host: "localhost"
    });
});

// Sass build
var sassBuild = function () {
    gulp.src('assets/sass/**/*.scss').pipe(sass({
        errLogToConsole: false,
        outputStyle: 'compressed'
    }))
    .on('error', reportError)
    .pipe(gulp.dest('assets/css'))
};

// Compile sass
gulp.task('sass', sassBuild);

// Error report sass
var reportError = function (error) {
    var lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

    notify({
        title: 'Task Failed [' + error.plugin + ']',
        message: lineNumber + 'See console.',
        sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
    }).write(error);

    beeper(); // Beep 'sosumi' again

    // Pretty error reporting
    var report = '';
    var chalk = c.white.bgRed;

    report += chalk('TASK:') + ' [' + error.plugin + ']\n';
    report += chalk('PROB:') + ' ' + error.message + '\n';
    if (error.lineNumber) { report += chalk('LINE:') + ' ' + error.lineNumber + '\n'; }
    if (error.fileName)   { report += chalk('FILE:') + ' ' + error.fileName + '\n'; }
    console.error(report);

    // Prevent the 'watch' task from stopping
    this.emit('end');
}

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  // Watch .scss files on node modules
  gulp.watch('node_modules/vitis-frontend/sass/**/*.scss', ['sass']);
  // Watch .js files
  gulp.watch('assets/js/**/*.js', ['jekyll-rebuild']);
  // Watch .css files
  gulp.watch('assets/css/**/*.css', ['jekyll-rebuild']);
  // Watch image files
  gulp.watch(['assets/images/**/*.**'], ['jekyll-rebuild']);
  // Watch .html files and posts
  gulp.watch(['index.html', '*/*.html', '*.md', '_posts/*'], ['jekyll-rebuild']);
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', function () {
    gulp.start('sass', 'browser-sync', 'watch');
});
