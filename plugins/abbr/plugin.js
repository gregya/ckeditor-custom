CKEDITOR.plugins.add( 'abbr', {
    icons: 'abbr',
    init: function( editor ) {
        editor.addCommand( 'abbrDialog', new CKEDITOR.dialogCommand( 'abbrDialog' ) );
        editor.ui.addButton( 'Abbr', {
            label: 'Insert Abbreviation',
            command: 'abbrDialog',
            toolbar: 'tools',
            icon: this.path + 'icons/abbr.png'
        });

        CKEDITOR.dialog.add( 'abbrDialog', this.path + 'dialogs/abbr.js' );
    }
});
