function loadData() {

	$.getJSON("json/votes.json", function(json) {
   		loadVotes(json.dataset);
	});

	$.getJSON("json/csn.json", function(json) {
   		console.log(json); // this will show the info it in firebug console
		loadCSN(json.dataset);
	});
}

function loadVotes(dataset) {

	//Gå igenom all regionskoder
	$.each(dataset.dimension.Region.category.index, function(region, index) {
		
		//Räkna ut läns-id genom två första siffrorna i regions-id
		var lan_id = parseInt(region.substring(0,2));

		//indexera i stycken om 8 eftersom det finns 8 partier
		index = index * 8;

		getLan(lan_id).m += dataset.value[index];
		getLan(lan_id).c += dataset.value[index + 1];
		getLan(lan_id).fp += dataset.value[index + 2];
		getLan(lan_id).kd += dataset.value[index + 3];
		getLan(lan_id).mp += dataset.value[index + 4];
		getLan(lan_id).s += dataset.value[index + 5];
		getLan(lan_id).v += dataset.value[index + 6];
		getLan(lan_id).sd += dataset.value[index + 7];

	});

	//Gå igenom alla län, räkna ut totalt antal röster och dela på för att få i procent.
	for(i = 0; i < 21; i++) {

		var all_votes = alla_lan[i].m + alla_lan[i].c + alla_lan[i].fp + alla_lan[i].kd
		 + alla_lan[i].mp + alla_lan[i].s + alla_lan[i].v + alla_lan[i].sd;

		 alla_lan[i].m /= all_votes;
		 alla_lan[i].c /= all_votes;
		 alla_lan[i].fp /= all_votes;
		 alla_lan[i].kd /= all_votes;
		 alla_lan[i].mp /= all_votes;
		 alla_lan[i].s /= all_votes;
		 alla_lan[i].v /= all_votes;
		 alla_lan[i].sd /= all_votes;

	}
		
}

function loadCSN() {

	$.each(dataset.dimension.Region.category.index, function(lan_id, index) {
		


	});

}


