var
  cached = require('gulp-cached'),
  cleanCSS = require('gulp-clean-css'),
  gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  plumber = require('gulp-plumber'),
  responsive = require('gulp-responsive'),
  uglify = require('gulp-uglify'),
  watch = require('gulp-watch');

// Markup optimization
gulp.task('html', function() {
  gulp.src('./src/**/*.html')
    .pipe(plumber())
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeTagWhitespace: true
    }))
    .pipe(gulp.dest('./dist'));
});

// Styles optimization
gulp.task('css', function() {
  gulp.src('./src/**/**/*.css')
    .pipe(plumber())
    .pipe(cached())
    .pipe(cleanCSS({
      compatibility: 'ie8',
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('./dist'));
});

// Scripts optimization
gulp.task('js', function() {
  gulp.src('./src/**/**/*.js')
    .pipe(plumber())
    .pipe(cached())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

// Images optimization

gulp.task('img', function() {
  gulp.src('./src/**/**/*.{png,jpg}')
    .pipe(plumber())
    .pipe(cached())
    .pipe(responsive({
      'views/images/pizzeria.jpg': [{
        width: 100,
        quality: 60,
        rename: {
          suffix: '-sm'
        }
      }, {
        width: 360,
        quality: 60,
        rename: {
          suffix: '-md'
        },
      }, {
        width: 720,
        quality: 60,
      }],
      'img/*.jpg': {
        quality: 60,
        progressive: true
      },
      'img/*.png': {
        quality: 60
      },
    }, {
      errorOnEnlargement: true,
      errorOnUnusedConfig: false,
      errorOnUnusedImage: false,
      passThroughUnused: true,
      withMetadata: false
    }))
    .pipe(gulp.dest('./dist'));
});

// Build all task
gulp.task('build', ['html', 'css', 'js', 'img']);

// Watch changes task

gulp.task('default', function() {
  gulp.watch('./src**/**/*.*', ['build']);
});
