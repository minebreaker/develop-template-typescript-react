const gulp = require( "gulp" )
const ts = require( "gulp-typescript" )
const webpack = require( "webpack-stream" )
const webpackConfig = require( './webpack.config.js' )
const rimraf = require( "rimraf" )


function compile() {
    const tsProject = ts.createProject( "./tsconfig.json" )
    return tsProject.src()
                    .pipe( tsProject() )
                    .pipe( gulp.dest( "./build/sources" ) )
}

function bundle() {
    return gulp.src( "./build/sources/src/index.js" )
               .pipe( webpack( webpackConfig ) )
               .pipe( gulp.dest( './build/out' ) )
}

function copy() {
    return gulp.src( "./static/*" )
               .pipe( gulp.dest( "./build/out" ) )
}

function clean( cb ) {
    rimraf( "./build/*", cb )
}

function watch() {
    gulp.watch( "./src/*.ts*", { ignoreInitial: false }, gulp.series( compile, bundle ) )
}

function test( cb ) {
    // We prefer to run tests in another process
    const exec = require( "child_process" ).exec
    exec( "npx mocha --config .mocharc.js", ( error, stdout ) => {
        console.log( stdout )
        error && console.log( error )
        cb( error )
    } )
}

const bundleTask = gulp.series( compile, bundle )

const buildTask = gulp.parallel(
    gulp.series( compile, gulp.parallel( bundle, test ) ),
    copy
)

module.exports = {
    build: buildTask,
    bundle: bundleTask,
    copy,
    clean,
    default: buildTask,
    watch,
    test
}
