(function() {
    var o = { exec: function(p) {
        url = baseUrl + "/GetSomeData";
        $.post(url, function(response) {
            alert(response)
        });
    }
    };
    CKEDITOR.plugins.add('myplugin', {
        init: function(editor) {
            editor.addCommand('myplugin', o);
            editor.ui.addButton('myplugin', {
                label: 'myplugin',
                icon: this.path + 'myplugin.png',
                command: 'myplugin'
            });
        }
    });
})();