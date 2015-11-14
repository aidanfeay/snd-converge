$converge = $('#converge-btn'),
$modal = $('#converge-modal-overlay'),
$close = $('#close-modal');

$converge.on('click', function(){
	$modal.fadeIn('fast');
});
$close.on('click', function(){
	$modal.fadeOut('fast');
});

$('.converge-opts li').each(function(){
	// console.log($(this);
	$(this).on('click', function(){
		$('#prompt-converge').animate({'opacity':0},100).delay(200).hide();
		$('#confirm-converge').delay(400).fadeIn(200);
	})
})