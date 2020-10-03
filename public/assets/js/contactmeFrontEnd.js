$(document).ready(function () {
	// listen to the addburger text area for any change
	// $('#addburger').on('change', function () {
	// 	// make the button disable when nth is add in the textbox
	// 	if ($('#addburger').val().trim() != '') {
	// 		$('.addBurgerBTN').removeAttr('disabled');
	// 	} else {
	// 		$('.addBurgerBTN').attr('disabled', 'disabled');
	// 	}
	// });

	// send the form infomation to the server
	$('.contactmeForm').on('submit', function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		const newContact = {
			name: $('.contactmeName').val(),
			email: $('.contactmeEmail').val(),
			message: $('.contactmeMessage').val(),
		};
		console.log(newContact);

		// send the post request
		$.ajax('/send', {
			type: 'POST',
			data: newContact,
		}).then(function () {
			console.log(`${newContact.name} is sent`);
			// Reload the page to get the updated list
			// location.reload();
		});
	});
});
