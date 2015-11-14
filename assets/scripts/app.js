$converge = $('#converge-btn'),
$modal = $('#converge-modal-overlay'),
$close = $('#close-modal');

$converge.on('click', function(){
	$modal.fadeIn('fast');
});
$close.on('click', function(){
	$modal.fadeOut('fast');
});