const gulp = require('gulp')
const sass = require('gulp-sass')
const nodeSass = require('node-sass')
const autoprefixer = require('gulp-autoprefixer')

const inProduction = process.env.NODE_ENV === 'production'

console.log({ inProduction })

gulp.task('default', done => {
    gulp.src('src/main.scss')
        .pipe(
            sass({
                outputStyle: inProduction ? 'compressed' : 'expanded'
            })
        )
        .pipe(gulp.dest('dist/'))

    done()
})

    