const gulp = require( "gulp" )
const ts = require( "gulp-typescript" )
const webpack = require( "webpack-stream" )
const webpackConfig = require( './webpack.config.js' )
const rimraf = require( "rimraf" )
const Mocha = require( "mocha" )


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
    const testDir = "./build/sources/test"
    const path = require( "path" )
    const fs = require( "fs" )
    const mocha = new Mocha( require("./.mocharc.js") )
    fs.readdir( testDir, "utf8", ( err, files ) => {
        files.filter( file => file.endsWith( ".js" ) )
             .forEach( file => mocha.addFile( path.join( testDir, file ) ) )
        mocha.run( () => {
            cb()
        } )
    } )
    cb()
}

const bundleTask = gulp.series( compile, bundle )

const buildTask = gulp.parallel(
    gulp.series( bundleTask, test ),
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
