module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/css/application.css': 'resources/scss/application.scss',
        }
      }
    },
    watch: {
      css: {
        files: ['resources/sass/**/*.sass', 'resources/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass','watch']);
};
