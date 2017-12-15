CKEDITOR.plugins.add( "addattachment", {
    icons: "addattachment",
    init: function ( editor ) {
        editor.ui.addButton( "addattachment", {
            label: "Add Attachment",
            command: "addAttachment",
            toolbar: "insert"
        } );

        editor.addCommand( "addAttachment", {
            exec: function() {
                editor.fire( "addAttachment" );
            }
        } );
    }
} );
