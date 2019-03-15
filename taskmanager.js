$(document).ready(function() {
	$(".menu-icon").on("click", function() {
		$("#welcome").fadeIn(3000, function() {

		});
	});
});

$("#completed").on("click",function() {
		alert("Task Completed")
});

$('#list-items').html(localStorage.getItem('listItems'));
		$('.add-items').submit(function(event) {
	event.preventDefault();

	var item = $('#todo-list-item').val();
	if(item) {
	$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
		localStorage.setItem('listItems', $('#list-items').html());
		$('#todo-list-item').val("");
	}
});

$(document).on('change', '.checkbox', function() {
		 if($(this).attr('checked')) {
 		$(this).removeAttr('checked'); }
			else {
		$(this).attr('checked', 'checked');
			}
		$(this).parent().toggleClass('completed');
			localStorage.setItem('listItems', $('#list-items').html());
});


$(document).on('click', '.remove', function() {
	$(this).parent().remove();
	localStorage.setItem('listItems', $('#list-items').html());
});

$("#checkbox").on("click", function() {
	$(".form-control").hide();
});

$("#edit").on("click", function() {
	$(".form-control").show();

});

