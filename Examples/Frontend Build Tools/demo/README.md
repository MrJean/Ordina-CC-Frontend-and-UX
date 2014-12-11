Ordina-CC-Frontend-and-UX
=========================

# Grunt

## package.json

Install the following modules using npm install <module_name> --save-dev

- grunt-contrib-uglify
- grunt-contrib-concat
- grunt-contrib-jshint
- grunt-contrib-watch
- grunt-contrib-connect

## Gruntfile.js

Create a Gruntfile.js and add following parts.
Parts taken from: http://gruntjs.com/sample-gruntfile

### "Wrapper" function

The first part is the "wrapper" function, which encapsulates your Grunt configuration.

    module.exports = function(grunt) {
    }

### Configuration object

Within that function we can initialize our configuration object:

    grunt.initConfig({
    });
    
### Read project settings

Next we can read in the project settings from the package.json file into the pkg property. This allows us to refer to the values of properties within our package.json file, as we'll see shortly.

    pkg: grunt.file.readJSON('package.json')

### Result so far

This results in

    module.exports = function(grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json')
        });
    };

### Config for concat

    concat: {
        options: {
            separator: ';'
        },
        dist: {
            src: ['src/**/*.js'], // , 'bower_components/**/dist/jquery.js', 'bower_components/**/dist/*.min.js'
            dest: 'dist/<%= pkg.name %>.js'
        }
    },

### Config for uglify

    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
            files: {
                'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
            }
        }
    },
        
### Config jshint

    jshint: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        options: {
            // options here to override JSHint defaults
            globals: {
                jQuery: true,
                console: true,
                module: true,
                document: true
            }
        }
    },
    
### Config watch

Run by using: grunt watch

    watch: {
        options: {
            livereload: true
        },
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat', 'uglify'], // tasks: ['jshint'], 
        livereload: {
            files: ['*.html']
        }
    },

### Connect config

    connect: {
        options: {
            port: 9000,
            livereload: 35729,
            hostname: '*' // * = accessible from anywhere ; default: localhost ; look up machine IP
        },
        livereload: { 
            options: {
                open: true // Open default document at startup
            }
        }
    }

### Load plugins

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');

### Register tasks

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('server', function (target) {
        if (target === '/') {
            return grunt.task.run(['default', 'connect:development:keepalive']);
        }

        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
    
### Execute tasks

- grunt
- grunt watch (defined earlier by including watch plugin)
- grunt test
- grunt server

# Bower

Search for jQuery and install as dependency and add to bower.json

    bower search jquery

    bower install jquery --save