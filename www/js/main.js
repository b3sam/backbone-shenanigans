requirejs.config({
    baseUrl: '/js',
    enforceDefine: true,
    paths: {
        'jquery' : [
            '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
            'lib/jquery/jquery-1.8.1.min'
        ],
        'underscore' : 'lib/underscore/underscore.min',
        'backbone' : 'lib/backbone/backbone.min'
    }
});

define(['app', 'jquery', 'underscore', 'backbone'], function(App) {
    App.init();
});