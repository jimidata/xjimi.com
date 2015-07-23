module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            development: {
                options: {
                    loadPath: [
                        "bower_components/foundation/scss/"
                    ]
                },
                files: [{
                    expand: true,
                    cwd: "scss/",
                    src: "**/*.scss",
                    dest: "stylesheets/",
                    ext: ".css"
                }]
            },
            production: {
                options: {
                    paths: [
                        "bower_components/bootstrap/less/"
                    ],
                    style: "compressed"
                },
                files: [{
                    expand: true,
                    cwd: "scss/",
                    src: "**/*.scss",
                    dest: "stylesheets/",
                    ext: ".css"
                }]
            }
        },
        haml: {
            main: {
                files: [{
                    expand: true,
                    cwd: "_pages/",
                    src: "**/*.haml",
                    dest: "_sites/",
                    ext: ".html"
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'bower_components/', src: '**', dest: '_sites/bower_components'},
                    {expand: true, cwd: '_pages/', src: '**/*.html', dest: '_sites/'},
                    {expand: true, src: ['img/**', 'stylesheets/**', 'js/**', 'resources/**', 'humans.txt', 'robots.txt'], dest: '_sites/'}
                ]
            }
        },
        uglify: {
            options: {
                compress: {
                    warnings: false
                },
                mangle: true,
                mangleProperties: false,
                preserveComments: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '_sites/js/',
                    src: '**/*.js',
                    dest: '_sites/js/'
                }]
            }
        },
        watch: {
            sass: {
                files: "scss/**/*.scss",
                tasks: "sass:development"
            },
            haml: {
                files: ["_includes/**/*.haml", "_pages/**/*.haml"],
                tasks: "haml"
            },
            copy: {
                files: ['_pages/**/*.html', 'img/**', 'stylesheets/**', 'js/**'],
                tasks: 'copy'
            },
            concat: {
                files: 'statics/js/**',
                tasks: 'concat'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-haml');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['sass:development', "haml", 'copy']);
    grunt.registerTask('dist', ['sass:production', "haml", 'copy', 'uglify:dist']);
};
