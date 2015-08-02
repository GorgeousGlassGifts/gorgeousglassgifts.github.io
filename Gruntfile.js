/*
 * Generated on 2015-07-30
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);


  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    watch: {
      assemble: {
        files: [
          '<%= config.src %>/{content,data,helpers,templates}/{,*/}*.{md,hbs,yml,css,js}'
        ],
        tasks: ['assemble']
      },
      copy: {
        files: [
          '<%= config.src %>/assets/{,*/}*.{css,jpg}'
        ],
        tasks: ['copy']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      options: {
        helpers: ['<%= config.src %>/helpers/**/*.js' ]
      },
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs',
          plugins: ['assemble-middleware-permalinks','assemble-middleware-sitemap'],
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    copy: {
      bootstrap: {
        expand: true,
        cwd: 'bower_components/bootstrap/dist/',
        src: '**',
        dest: '<%= config.dist %>/assets/'
      },
      theme: {
        expand: true,
        cwd: 'src/assets/',
        src: '**/*.css',
        dest: '<%= config.dist %>/assets/css/'
      },
      images: {
        expand: true,
        cwd: 'src/assets/',
        src: '**/*.{png,jpg,jpeg,gif,webp,svg}',
        dest: '<%= config.dist %>/assets/image/'
      },
      favicon: {
        expand: true,
        cwd: 'src/assets/',
        src: '**/favicon.ico',
        dest: '<%= config.dist %>'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      generated: ['<%= config.dist %>/**/*.{html,xml}'],
      all: ['<%= config.dist %>/**']
    }

  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:generated',
    'copy',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};

