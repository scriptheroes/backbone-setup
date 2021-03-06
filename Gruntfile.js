'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        open: {
            server: {
                url: 'http://localhost:<%= connect.server.options.port %>/app'
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'app',
                    paths: {
                        jquery: 'bower_components/jquery/jquery',
                        underscore: 'bower_components/underscore/underscore',
                        backbone: 'bower_components/backbone/backbone',
                        i18n: 'bower_components/requirejs-i18n/i18n',
                        text: 'bower_components/requirejs-text/text',
                        baseview: 'src/vendors/baseview/baseview',

                        config: 'src/config',
                        app: 'src/app',
                        controller: 'src/controller',
                        router: 'src/router',
                        controllers: 'src/controllers',
                        views: 'src/views',
                        util: 'src/util',
                        templates: 'templates'
                    },
                    shim: {
                        underscore: {
                            exports: '_'
                        },
                        backbone: {
                            deps: ['underscore', 'jquery'],
                            exports: 'Backbone'
                        },
                        baseview: {
                            deps: ['backbone']
                        }
                    },
                    dir: 'dist',
                    fileExclusionRegExp: /^(tests?|spec|Gruntfile\.js)$/,
                    removeCombined: true,
                    preserveLicenseComments: false
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'dist',
                    src: [
                        '*.{ico,txt,js,html}',
                        '.htaccess',
                        'bower_components/**/*',
                        'images/**/*',
                        'styles/**/*'
                    ]
                }]
            }
        },
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            'app/.tmp/',
                            'dist'
                        ]
                    }
                ]
            }
        },
        compass: {
            options: {
                sassDir: 'app/styles',
                specify: ['app/styles/main.scss'],
                cssDir: 'app/.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: 'app/images',
                fontsDir: 'app/styles/fonts',
                importPath: 'app/bower_components',
                httpImagesPath: 'app/images',
                httpGeneratedImagesPath: 'app/images/generated',
                httpFontsPath: 'app/styles/fonts',
                relativeAssets: false
            },
            dist: {}
        },
        cssmin: {
            dist: {
                files: {
                    'app/styles/css/main.css': ['app/.tmp/styles/{,*/}*.css']
                }
            }
        },
        bower: {
            install: {
                options: {
                    copy: false,
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false
                }
            }
        },
        watch: {
            scripts: {
                files: ['app/styles/**'],
                tasks: ['publish']
            }
        }
    });

    grunt.registerTask('server', [
        'connect:server',
        'open',
        'watch'
    ]);

    grunt.registerTask('publish', [
        'clean:dist',
        'compass:dist',
        'cssmin:dist',
        'copy:dist'
    ]);
};
