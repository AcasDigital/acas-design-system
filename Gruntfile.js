module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          'src/assets/css/main.css' : 'src/assets/scss/main.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'src/assets/css/main.css':'src/assets/css/main.css'
        }
      }
    },
    watch: {
      css: {
        files: ['src/assets/scss/*.scss', 'src/components/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
