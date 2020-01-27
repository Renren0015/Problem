function myFunction() {
	var x = prompt('What is your age?', 'Enter your age');
	if (x >= 18) {
		swal({
			title: 'You are Qualified to vote',
			icon: 'success',
		});
	} else if (x >=0) {
		swal({
			title: 'You are not Qualified to vote',
			text: 'May gatas ka pa sa labi',
			icon: 'error',
		});
	}
}