// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({

    // JS TASKS ================================================================
    // check all js files for errors
    jshint: {
      all: ['client/js/**/*.js'] 
    },

	// take all the js files and minify them into app.min.js
    uglify: {
      build: {
        files: {
          'static/js/app.min.js': ['client/js/**/*.js', 'client/js/*.js']
        }
      }
    },

    // CSS TASKS ===============================================================
    // process the less file to style.css
    less: {
      build: {
        files: {
          'static/css/style.css': 'client/css/style.less'
        }
      }
    },

	// take the processed style.css file and minify
    cssmin: {
      build: {
        files: {
          'static/css/style.min.css': 'static/css/style.css'
        }
      }
    },

    // watch css and js files and process the above tasks
    watch: {
      css: {
        files: ['client/css/*.less'],
        tasks: ['less', 'cssmin']
      },
      js: {
        files: ['client/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      }
    },

	// watch our node server for changes
    nodemon: {
      dev: {
        script: 'app.js'
      }
    },

	// run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    },   


  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'uglify', 'concurrent']);

};