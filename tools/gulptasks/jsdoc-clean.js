/*
 * Copyright (C) Highsoft AS
 */

const Gulp = require('gulp');

/* *
 *
 *  Tasks
 *
 * */

/**
 * Removes the `build/api` directory.
 *
 * @return {Promise<void>}
 *         Promise to keep
 */
function task() {

    const ProcessLib = require('./lib/process');

    return ProcessLib
        .exec('rm -rf build/api')
        .then(() => {});
}

Gulp.task('jsdoc-clean', task);