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
  return gulp.src(['./public/javascripts/*.js','public/javascripts/app/*.js'])
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
      .pipe(sourcemaps.write())
      .pipe(rename('main.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest('./public/stylesheets/'))
      .pipe(notify({ message: 'css task ok' }))
      .pipe(browserSync.stream());
});

// 合并，压缩js文件
// gulp.task('scripts', function() {
//   return gulp.src(['./app/js/*.js'])
//         .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
//         .pipe(rename('main.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./public/javascripts/'))
//         .pipe(notify({ message: 'js task ok' }))
//         .pipe(browserSync.stream());
// });

//压缩图片
// gulp.task('Imagemin', function () {
//    return gulp.src('./app/images/*.{png,jpg,gif,ico}')
//         .pipe(cache(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//         })))
//         .pipe(gulp.dest('./public/images/'))
//         .pipe(notify({message: 'img is ok'}))
//         .pipe(browserSync.stream());
// });


// Static Server + watching scss/html files
gulp.task('serve',['lint', 'less'], function() {

    // browserSync.init({
    //     server: {
    //       baseDir: "./dist",
    //       index: 'index.html'
    //     }
    // });
   
    browserSync.init({
        proxy: "localhost:3000"
    });
   

    // 监听文件变化

    gulp.watch('./app/css/*.less', ['less']).on('change', reload);

    // gulp.watch('./public/javascripts/*.js').on('change', reload);

    gulp.watch('./views/*/*.html').on('change', reload);

    // gulp.watch('./app/images/*.{png,jpg,gif,ico}', ['Imagemin']).on('change', reload);

});


// 默认任务
gulp.task('default',['serve']);