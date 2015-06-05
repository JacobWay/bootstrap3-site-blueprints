module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        files: {
          "css/bootstrap.css": "less/bootstrap.less" // destination file and source file
        }
      }
    },

    concat: {
      bootstrap: {
        src: [
          'js/bootstrap/transition.js',
          'js/bootstrap/alert.js',
          'js/bootstrap/button.js',
          'js/bootstrap/carousel.js',
          'js/bootstrap/collapse.js',
          'js/bootstrap/dropdown.js',
          'js/bootstrap/modal.js',
          'js/bootstrap/tooltip.js',
          'js/bootstrap/popover.js',
          'js/bootstrap/scrollspy.js',
          'js/bootstrap/tab.js',
          'js/bootstrap/affix.js'
        ],
        dest: 'js/bootstrap.js'
      }
    },

    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      js: {
        files: ['js/bootstrap/**/*.js'],
        tasks: ['concat:bootstrap'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'concat', 'watch']);
  // grunt.loadNpmTasks("grunt-contrib-less");

};
