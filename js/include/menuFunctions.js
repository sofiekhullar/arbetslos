$(document).ready(function(){
    $(".nav-tabs a").click(function(){

    	console.log(this);
        $(this).tab('show');
    });
});