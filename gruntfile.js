module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'_js/*.js'
				],
				dest: 'public/assets/js/production.js'
			}
		},

		uglify: {
			build: {
				src: 'public/assets/js/production.js',
				dest: 'public/assets/js/production.min.js'
			}
		},

		compass: {
			dist: {
				options: [{
					sassDir: '_sass',
					cssDir: 'public/assets/css/',
					enviroment: 'development',
					trace: true
				}]
			}
		},

		watch: {
			scripts: {
				files: ['_js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false
				},
			},
			css: {
				files: ['_sass/*.scss', '_sass/components/*.scss'],
				tasks: ['compass'],
				options: {
					spawn: false
				}
			},
			hbs: {
				files: ['_layout/*.hbs', 'layout/**/*.hbs'],
				tasks: ['assemble'],
				options: {
					spawn: false
				}
			}
		},

		assemble : {
			options: {
				layout: './_layout/default-layout.hbs',
				assets: './public/assets/',
				partials: './_layout/partials/*.hbs'
			},
			pages: {
				expand: 'true',
				cwd: '_layout/pages',
				src: '*.hbs',
				dest: 'public/'
			}
		},

		connect: {
			server: {
				options: {
					port: 8000,
					base: './public/'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('assemble');

	//registered tasks
	grunt.registerTask('default', ['concat', 'uglify', 'compass', 'assemble']);
	grunt.registerTask('listen', ['concat', 'uglify', 'compass', 'watch']);
	grunt.registerTask('server', [ 'default', 'connect', 'watch']);
};