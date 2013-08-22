var analystLocation = "NEW YORK",
    currentDateforPublication = Ext.Date.format(new Date(), 'F d, Y');


CKEDITOR.dialog.add( 'datelineDialog', function( editor ) {
	return {

		title: 'Add Dateline',
		minWidth: 400,
		minHeight: 200,
		contents: [
			{

				id: 'datelineDialogID',
				label: 'Confirm Dateline',


				elements: [
					{
						type: 'text',
						id: 'primaryOffice',
						label: "Analyst's Primary Office:",
                        'default': analystLocation,
						validate: CKEDITOR.dialog.validate.notEmpty( "Please enter your primary office" ),
                        commit : function( data )
                        {
                            data.primaryOffice = this.getValue();
                        }
					},
					{
						type: 'text',
						id: 'pubDate',
						label: 'Publication Date:',
                        'default': currentDateforPublication,
						validate: CKEDITOR.dialog.validate.notEmpty( "Please enter a publication date" ),
                        commit : function( data )
                        {
                            data.pubDate = this.getValue();
                        }
					}
				]
			}
		],

		onOk: function() {

            var data = {};
            this.commitContent( data );

            editor.insertHtml( data.primaryOffice + " (Standard & Poor's) " + data.pubDate  );
		}
	};
});