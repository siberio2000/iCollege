module.exports = function(grunt) {

	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';\n\n'
			},
			build: {
				src: [
				'js/lib/vendor/jquery/dist/jquery.js',
				'js/src/script.js'
				],
				dest: 'js/script.js'
			}
		},

		uglify: {
			build: {
				files: [
				{ 'js/script.min.js': ['js/script.js'] }
				]
			}
		},

		// compile scss
		sass: {
			options: {
				implementation: require('node-sass'),
				sourceMap: true,
				outputStyle: 'expanded' //nested, expanded, compact, compressed
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'scss/',
						src: '{,*/}*.scss',
						dest: 'css/',
						ext: '.css'
					}
				]
			}
		},

		// post process css
		postcss: {
			options: {
				map: true,
				processors: [
					require('postcss-assets')({
						loadPaths: ['./images']
					}),
					require('autoprefixer')({
						remove: false 
					}),
					require('cssnano')() // minify
				]
			},
			dist: {
				src: 'css/*.css'
			}
		},

		watch: {
			js: {
				files: ['Gruntfile.js', '<%= concat.build.src %>'],
				tasks: ['concat', 'uglify']
			},
			css: {
				files: ['scss/screen.scss', 'scss/**/*.scss'],
				tasks: ['css']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify'); // minify javascript
	grunt.loadNpmTasks('grunt-contrib-watch'); // Run predefined tasks whenever watched file patterns are added, changed or deleted.
	grunt.loadNpmTasks('grunt-contrib-concat'); // join files
	grunt.loadNpmTasks('grunt-sass'); // compile sass
	grunt.loadNpmTasks('grunt-notify'); // cross-platform notifications
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-modernizr'); // Build modernizr file
	grunt.loadNpmTasks('grunt-prettier'); // Auto-linting
	grunt.loadNpmTasks('grunt-browser-sync'); // update browser on save

	grunt.registerTask('default', ['concat', 'uglify', 'css']);
	grunt.registerTask('css', ['sass', 'postcss']);
};
