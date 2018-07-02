module.exports = function (grunt) {
    // 任务配置，所有插件的配置信息

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),//获取package.json的信息

        //uglify插件的配置信息
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'	//用于在文件顶部生成一个注释
            },
            build: {		//用于将一个js文件压缩为一个目标文件
                src: 'src/js/<%= pkg.name %>.js',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },

        //jshint插件的配置信息
        jshint: {
            build: ['Gruntfile.js', 'src/js/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },


        /*
        sass: {
            dist: {
                options: {                       // Target options
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ]
            },
            dist: {
                src: 'dist/css/!*.css'
            }
        },
        */


        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: './src/sass',
                    cssDir: './dist/css',
                    cacheDir :'./src/.sass-cache',
                    fontsDir: './dist/font',
                    outputStyle: 'expanded',
                    environment: 'production',
                    watch: true
                }
            }
        },


        //watch插件的配置信息,真正实现自动化
        watch: {
            build: {
                files: ['src/js/*.js'],
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });


    // 告诉grunt我们将使用的插件，没有先后顺序
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-postcss');
    //grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');


    // 告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
    // 你是希望先检查语法呢？还是先合并呢？肯定是先检查语法，所以要注意先后顺序
    //grunt.registerTask('default', ['sass','postcss:dist','jshint', 'uglify','watch']);
    grunt.registerTask('default', [ 'jshint', 'uglify','compass','watch']);

};