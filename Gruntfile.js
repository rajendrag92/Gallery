module.exports = function (grunt) {
    // Project configuration.  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            sitecss: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {

                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    'client/viewPorts/viewPort.js',
                    'client/viewPorts/largeDeviceViewPort.js',
                    'client/viewPorts/mediumDeviceViewPort.js',
                    'client/viewPorts/smallDeviceViewPort.js',
                    'client/viewPorts/smallestDeviceViewPort.js',
                    'client/viewPorts/viewPortFactory.js',

                    'client/imageGallery.js',
                    'client/imageGalleryRepository.js',
                    'client/imageLargeView.js',
                    'client/imageTemplate.js',

                ],
                dest: 'Client/bundle.js'
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    // Default task.  
    grunt.registerTask('default', ['uglify']);
};