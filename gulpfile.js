const gulp = require('gulp')
const sass = require('gulp-sass')
const nodeSass = require('node-sass')
const autoprefixer = require('gulp-autoprefixer')

const inProduction = process.env.NODE_ENV === 'production'

console.log({ inProduction })

const build = done => {
gulp.src('src/bramble.scss')
    .pipe(
        sass({
            outputStyle: inProduction ? 'compressed' : 'expanded'
        })
    )
    .pipe(gulp.dest('dist/'))

    done()
}

const watchBuild = () => {
    gulp.watch('src/**/*.scss', gulp.parallel([build]))
}

exports.default = build
exports.watch = watchBuild

    