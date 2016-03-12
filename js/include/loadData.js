function loadData() {

	$.getJSON("json/ungdomar.json", function(json) {
   		loadUngdomar(json.dataset);
	});

	$.getJSON("json/votes.json", function(json) {
   		loadVotes(json.dataset);
	});

	$.getJSON("json/csn.json", function(json) {
		loadCSN(json.dataset);
	});

	$.getJSON("json/arbetslosa.json", function(json) {
		loadArbetsloshet(json);
	});
}

function loadUngdomar(dataset){

	$.each(dataset.dimension.Region.category.index, function(lan_id, index){

		var befolkning = 0;

		for(i = index*14*4; i < index*14*4 + 14*4; i++ ){

			befolkning += dataset.value[i];
		}

		getLan(lan_id).ung_befolkning = befolkning;

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

function loadCSN(dataset) {

	$.each(dataset.dimension.Region.category.index, function(lan_id, index) {
		

		//indexera i stycken om 8 eftersom det finns 8 partier
		index = index * 256;

	for(i=index; i < index+128; i +=2){


		getLan(lan_id).n_man_studieskuld += dataset.value[i];
		getLan(lan_id).studieskuld_man += dataset.value[i+ 1];

	}

	for(i=index + 128; i < index+256; i +=2){


		getLan(lan_id).n_kvinnor_studieskuld += dataset.value[i];
		getLan(lan_id).studieskuld_kvinnor += dataset.value[i+ 1];

	}



	});


}


function loadArbetsloshet(json){


	for(i=0; i < 21 ; i++){
		for(j=0; j < 21; j++){

			if(json.Blad1[i]["län"].localeCompare(alla_lan[j].namn)==0){

				alla_lan[j].n_totalt_arbetslosa =
					json.Blad1[i].alla_total/100 * alla_lan[j].total_befolkning;
				

				alla_lan[j].n_man_arbetslosa =
					json.Blad1[i]["alla_män"]/100 * alla_lan[j].total_befolkning/2;

				alla_lan[j].n_kvinnor_arbetslosa =
					json.Blad1[i].alla_kvinnor/100 * alla_lan[j].total_befolkning/2;

				alla_lan[j].n_unga_arbetslosa =
					json.Blad1[i].ung_total/100 * alla_lan[j].ung_befolkning ;

				alla_lan[j].n_unga_kvinnor_arbetslosa =
					json.Blad1[i]["ung_män"]/100 * alla_lan[j].ung_befolkning/2;
				
				alla_lan[j].n_unga_man_arbetslosa =
					json.Blad1[i].ung_kvinnor/100 * alla_lan[j].ung_befolkning/2;

			}
		}
	}
	console.log(alla_lan);
}



