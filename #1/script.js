function add() {
    var x = parseInt(prompt('Input number', 'Input your number'));
    var y = parseInt(prompt('Input number', 'Input your another number'));
    var z = swal (x + y)({
				title: 'Success',
				icon: 'success',
			});
}
function sub() {
    var x = parseInt(prompt('Input number', 'Input your number'));
    var y = parseInt(prompt('Input number', 'Input your another number'));
    var z = alert(x - y);
}
function mult() {
    var x = parseInt(prompt('Input number', 'Input your number'));
    var y = parseInt(prompt('Input number', 'Input your another number'));
    var z = alert(x * y);
}
function div() {
    var x = parseInt(prompt('Input number', 'Input your number'));
    var y = parseInt(prompt('Input number', 'Input your another number'));
    var z = alert(x / y);
}