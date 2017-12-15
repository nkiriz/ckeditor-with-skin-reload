// CKEDITOR.plugins.add( "addinlineattachment", {
//     init: function ( editor ) {
//         editor.on( "paste", function ( event ) {
//             var data = event.data,
//                 dataTransfer = data.dataTransfer,
//                 filesCount = dataTransfer.getFilesCount();
//
//             for ( let i = 0; i < filesCount; i++ ) {
//                 let file = dataTransfer.getFile( i );
//
//             }
//         } );
//
//         editor.widgets.add( "inlineAttachment", {
//             downcast: function () {
//                 return new CKEDITOR.htmlParser.text( "" );
//             },
//             init: function () {
//                 var widget = this,
//                     id = this.wrapper.findOne( "[data-cke-upload-id]" ).data
//             }
//         } );
//     }
// } );
