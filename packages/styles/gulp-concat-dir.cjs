'use strict';

var through2 = require('through2'),
    path = require('path'),
    gutil = require('gulp-util');

module.exports = function (options) {
    var extendName = options.ext;
    var outputFiles = {};

    return through2.obj(
        function (file, env, cb) {
            var r_filename = path.relative(file.base, file.path);

            var outfile;
            var mathes = r_filename.match(/^.+?[\\\/]/);
            if (mathes) {
                outfile = mathes[0];
                outfile = outfile.substr(0, outfile.length - 1) + extendName;
            } else {
                outfile = r_filename.replace(/\.[^.]+?$/, extendName);
            }

            if (!outputFiles[outfile]) {
                outputFiles[outfile] = [];
            }
            outputFiles[outfile].push({
                name: file.path,
                file: file,
            });
            cb();
        },
        function (cb) {
            var filesName = Object.keys(outputFiles);

            if (filesName.length === 0) {
                return cb();
            }
            for (var i = 0; i < filesName.length; i++) {
                var filename = filesName[i];
                var concatFiles = outputFiles[filename];
                if (options.sort) {
                    const sort = options.sort;
                    const sortMap = new Map();
                    concatFiles.forEach((cv) => {
                        const index = options.sort.findIndex((sv) =>
                            cv.name.includes(sv)
                        );
                        sortMap.set(cv, index === -1 ? sort.length : index);
                    });
                    concatFiles = concatFiles.sort((a, b) => {
                        return sortMap[a] > sortMap[b] ? 1 : -1;
                    });
                    console.log(
                        `sorted`,
                        concatFiles.map((cv) => cv.name)
                    );
                }
                var concatFirstFile = concatFiles[0].file;

                var concatFileContents = concatFiles
                    .map(function (fileObj) {
                        var desc = '';
                        if (options.sourceComments) {
                            desc = '/** file: ' + fileObj.name + ' **/\n';
                        }
                        return desc + fileObj.file.contents.toString();
                    })
                    .join(gutil.linefeed);

                var concatenatedFile = new gutil.File({
                    base: concatFirstFile.base,
                    cwd: concatFirstFile.cwd,
                    path: path.join(concatFirstFile.base, filename),
                    contents: new Buffer(concatFileContents),
                });
                this.push(concatenatedFile);
            }
            cb();
        }
    );
};
