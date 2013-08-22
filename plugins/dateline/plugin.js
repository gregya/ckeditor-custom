(function(){

    CKEDITOR.plugins.add('dateline',

        {
        init:function(editor){
            editor.addCommand( 'datelineDialog', new CKEDITOR.dialogCommand( 'datelineDialog' ) );

            editor.ui.addButton('dateline',{
                label: 'Add Dateline',
                icon: this.path  + 'dateline-icon.png',
                command: 'datelineDialog'

            });

            CKEDITOR.dialog.add( 'datelineDialog', this.path + 'datelineDialog.js' );

        }

        })



 })();