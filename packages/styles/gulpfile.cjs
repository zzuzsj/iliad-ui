/*
Copyright 2020 Adobe. All rights reserved.
Copyright 2021 Gaoding. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/* eslint-disable */
const path = require('path');
const { Buffer } = require('buffer');
const through2 = require('through2');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('./gulp-concat-dir.cjs');
const order = require('gulp-order');
const replace = require('gulp-replace');
const fs = require('fs-extra');
const multiDest = require('gulp-multi-dest');
const del = require('del');
const prettier = require('gulp-prettier');

gulp.task('variable', function variable() {
    const allFiles = fs.readdirSync('scss');
    const outputDirs = allFiles
        .map((cv) => {
            return `scss/${cv}`;
        })
        .filter((cv) => {
            return fs.lstatSync(cv).isDirectory();
        });

    return gulp.src(['scss/variable-*.scss']).pipe(
        multiDest(outputDirs, {
            mode: 0755,
        })
    );
});
gulp.task('variable-clean', function variable() {
    return del(['scss/**/variable-*.scss', '!scss/variable-*.scss']);
});

gulp.task('scss', function scss() {
    return gulp
        .src(['scss/**/*.scss', '!scss/*.scss', '!scss/variable-*.scss'])
        .pipe(
            concat({
                ext: '.scss',
                sort: [
                    'colorGlobals',
                    'dimensionGlobals',
                    'Globals',
                    'Aliases',
                    'Semantic',
                ],
            })
        )
        .pipe(sass().on('error', sass.logError))
        .pipe(
            prettier({
                printWidth: 80,
                tabWidth: 4,
                useTabs: false,
                semi: true,
                singleQuote: true,
            })
        )
        .pipe(gulp.dest('.'));
});

gulp.task(
    'build',
    gulp.series(['variable', 'scss'], (cb) => {
        del(['scss/**/variable-*.scss', '!scss/variable-*.scss']);
        cb();
    })
);
// gulp.task('watch', function watch() {
//     gulp.watch('scss/**/*.scss', gulp.series(['scss']));
// });
