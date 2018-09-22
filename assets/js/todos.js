//check off specific todos y clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(200, function(argument) {
		$(this).remove();	
	});
	event.stopPropagation(); 
});

$("input").keypress(function(event)
{
	if(event.which === 13)
	{
	var todoText= $(this).val();
	$(this).val("");
	//create a new li and add to ul
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>")
	} 
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});