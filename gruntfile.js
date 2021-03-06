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
      options: {
        beautify: true,
        mangle: false
      },
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
      script: 'app.js',
      options: {
        args: ['dev'],
        nodeArgs: ['--debug']
      }
    }
  },

    //node inspector for server side debug
    'node-inspector': {
      dev: {}
    },

	// run watch and nodemon at the same time
  concurrent: {
    options: {
      logConcurrentOutput: true
    },
    tasks: ['nodemon', 'watch', 'node-inspector']
  }, 

    //run server side tests   
    mochaTest: {
      specs: {
        options: {
          ui: 'bdd',
          reporter: 'spec',
          require: './test/helpers/chai-spec'
        },
        src: ['test/server/**/*.js']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

  });

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('grunt-concurrent');
grunt.loadNpmTasks('grunt-node-inspector');
grunt.loadNpmTasks('grunt-mocha-test');
grunt.loadNpmTasks('grunt-karma');

grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'mochaTest', 'karma', 'uglify', 'concurrent']);

grunt.registerTask('test', ['jshint', 'mochaTest', 'karma']);

};