//引入gulp
var gulp = require('gulp');

// 引入组件
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cssmin = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');

// 检查脚本
gulp.task('lint', function() {
  return gulp.src('./app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(browserSync.stream());
});

// 编译Less并添加前缀,并压缩
gulp.task('less', function () {
  return gulp.src('./app/css/main.less')
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(less())
      .pipe(autoprefix('last 2 version', 'ie 9'))
      .pipe(concat('main.css'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist'))
      .pipe(rename('main.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest('./dist'))
      .pipe(notify({ message: 'css task ok' }))
      .pipe(browserSync.stream());
});

//useful.css提出
gulp.task('usefulCSS', function () {
  return  gulp.src('app/css/useful.import.less')
          .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
          .pipe(less())
          .pipe(autoprefix('last 2 version', 'ie 9'))
          .pipe(rename('useful.min.css'))
          .pipe(cssmin())
          .pipe(gulp.dest('./dist'))
          .pipe(notify({ message: 'usefulCSS task ok' }))
          .pipe(browserSync.stream());

})

// 合并，压缩js文件
gulp.task('scripts', function() {
  return gulp.src(['./app/js/*.js','!./app/js/{ignore}/*.js'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
        .pipe(notify({ message: 'js task ok' }))
        .pipe(browserSync.stream());
});

//插件js
gulp.task('rotateJS', function () {
  return gulp.src('./app/js/rotate.js')
         .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
         .pipe(rename('rotate.js'))
         .pipe(uglify())
         .pipe(gulp.dest('./dist'))
         .pipe(notify({ message: 'rotateJS task ok' }))
         .pipe(browserSync.stream());
});

//传递html文件
gulp.task('html', function () {
  return gulp.src('./app/index.html')
         .pipe(gulp.dest('./dist'));
});

//压缩图片
gulp.task('Imagemin', function () {
   return gulp.src('./app/assets/images/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
        })))
        .pipe(gulp.dest('./dist/assets/images'))
        .pipe(notify({message: 'img is ok'}))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve',['lint', 'less', 'scripts', 'rotateJS', 'html', 'Imagemin', 'usefulCSS'], function() {

    browserSync.init({
        server: {
          baseDir: "./dist",
          index: 'index.html'
        }
    });

    // 监听文件变化
    gulp.watch('./app/js/*.js', ['lint', 'scripts', 'rotateJS']).on('change', reload);

    gulp.watch('./app/css/*.less', ['less', 'usefulCSS']).on('change', reload);

    gulp.watch('./app/*.html', ['html']).on('change', reload);

    gulp.watch('./app/assets/**/*.{png,jpg,gif,ico}').on('change', reload);

});

// 默认任务
gulp.task('default',['serve']);