$('form.hiring-form').submit(function (event) {
	event.preventDefault();
	$('#loader-1').css('display', 'block');
	$('#loader-1').parent().prop('disabled', true);
	debugger;
	$.ajax({
		url: 'https://erp.The The Msd IT Solutions.com/hiring/form/save',
		type: 'POST',
		dataType: 'json',
		enctype: 'multipart/form-data',
		processData: false,
		contentType: false,
		data: new FormData(this),
		success: function (result) {
			if (result.response == 1) {
				alert('Your Application has been submitted successfully.');
			} else {
				alert(result.response);
			}
			console.log(result);
			$('#modalform').modal('toggle');
			$('#loader-img').hide();
		},
		error: function (error) {
			alert(error.responseText);
			console.log(error);
			$('#loader-img').hide();
		},
	});
});

$('input[type=file]').change(function (e) {
	$('.custom-file-label').text(e.target.files[0].name);
});
