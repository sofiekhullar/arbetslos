function testData() {
	var hej = 1;

	$.getJSON("json/votes.json", function(json) {
   		console.log(json); // this will show the info it in firebug console
   		console.log("mamma")
	});
	console.log("HEEJE")
}