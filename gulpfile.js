var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    inject = require('gulp-inject'),
    pug = require('gulp-pug'),
    del = require('del');

    gulp.task('inject', function () {
	  var target = gulp.src('app/index.html');
	  var sources = gulp.src(['app/js/**/*.js', 'app/**/*.css'], {read: false});
	  return target.pipe(inject(sources,{ relative: true }))
	    .pipe(gulp.dest('app'));
	});


    gulp.task('sass', function(){ // Создаем таск "sass"
    	return gulp.src('app/sass/**/*.scss') // Берем источник
	        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
	        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
	        .pipe(browserSync.reload({stream: true}))
	});

	
    gulp.task('del',function(){
    	del(['app/*.html'])
    })

	gulp.task('pug', function buildHTML() {
		return gulp.src('app/*.pug')
		.pipe(pug({
	    	doctype: 'html',
    		pretty: true
		}))
		.pipe(gulp.dest('app'))
	});


	gulp.task('browser-sync', function() { // Создаем таск browser-sync
	        browserSync({ // Выполняем browser Sync
	            server: { // Определяем параметры сервера
	                baseDir: 'app' // Директория для сервера - app
	            },
	            notify: false // Отключаем уведомления
	        });
	});


	gulp.task('watch', ['browser-sync','sass','pug','inject'], function() {
		gulp.watch('app/*.pug',['pug']);
        gulp.watch('app/sass/**/*.scss', ['sass'], browserSync.reload);
        gulp.watch('app/*.html', browserSync.reload); 
        gulp.watch('app/js/**/*.js', browserSync.reload); 
     });