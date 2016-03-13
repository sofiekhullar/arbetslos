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

	$.getJSON("json/lediga_jobb_per_lan.json", function(json) {
		loadLedigajobb(json);
		loadRiketVarden();

		createCharts();
		createCharts2();
		createCharts3();
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

		 alla_lan[i].m *= 100;
		 alla_lan[i].c *= 100;
		 alla_lan[i].fp *= 100;
		 alla_lan[i].kd *= 100;
		 alla_lan[i].mp *= 100;
		 alla_lan[i].s *= 100;
		 alla_lan[i].v *= 100;
		 alla_lan[i].sd *= 100;

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

		getLan(lan_id).n_kvinnor_studieskuld = parseInt(getLan(lan_id).n_kvinnor_studieskuld);
		getLan(lan_id).n_man_studieskuld = parseInt(getLan(lan_id).n_man_studieskuld);



	});


}


function loadArbetsloshet(json){

	for(i = 0; i < 21 ; i++) {
		for(j = 0; j < 21; j++) {

			if(json.Blad1[i]["län"].localeCompare(alla_lan[j].namn) == 0) {

				alla_lan[j].n_totalt_arbetslosa =
					parseInt(json.Blad1[i].alla_total/100 * alla_lan[j].total_befolkning);
				

				alla_lan[j].n_man_arbetslosa =
					parseInt(json.Blad1[i]["alla_män"]/100 * alla_lan[j].total_befolkning/2);

				alla_lan[j].n_kvinnor_arbetslosa =
					parseInt(json.Blad1[i].alla_kvinnor/100 * alla_lan[j].total_befolkning/2);

				alla_lan[j].n_unga_arbetslosa =
					parseInt(json.Blad1[i].ung_total/100 * alla_lan[j].ung_befolkning);

				alla_lan[j].n_unga_kvinnor_arbetslosa =
					parseInt(json.Blad1[i]["ung_män"]/100 * alla_lan[j].ung_befolkning/2);
				
				alla_lan[j].n_unga_man_arbetslosa =
					parseInt(json.Blad1[i].ung_kvinnor/100 * alla_lan[j].ung_befolkning/2);

			}
		}
	}
}

function loadLedigajobb(json) {
	for(i = 0; i < 21; i++) {
		var lan_id = parseInt(json.soklista.sokdata[i].id);
		getLan(lan_id).n_lediga_jobb = parseInt(json.soklista.sokdata[i].antal_ledigajobb);
		getLan(lan_id).n_platsannonser = parseInt(json.soklista.sokdata[i].antal_platsannonser);
	}
}

function loadRiketVarden() {

	for(i = 0; i < 21; i++) {

		getLan(-1).ung_befolkning += alla_lan[i].ung_befolkning; 

		getLan(-1).n_man_studieskuld += alla_lan[i].n_man_studieskuld; 
		getLan(-1).n_kvinnor_studieskuld += alla_lan[i].n_kvinnor_studieskuld; 
		getLan(-1).studieskuld_man += alla_lan[i].studieskuld_man; 
		getLan(-1).studieskuld_kvinnor += alla_lan[i].studieskuld_kvinnor; 

		getLan(-1).m = 23.3;
		getLan(-1).c = 6.1;
		getLan(-1).fp = 5.4;
		getLan(-1).kd = 4.6;
		getLan(-1).mp = 6.9;
		getLan(-1).s = 31;
		getLan(-1).v = 5.7;
		getLan(-1).sd = 12.9;

		getLan(-1).n_lediga_jobb += alla_lan[i].n_lediga_jobb; 
		getLan(-1).n_platsannonser += alla_lan[i].n_platsannonser; 

		getLan(-1).n_totalt_arbetslosa += alla_lan[i].n_totalt_arbetslosa; 
		getLan(-1).n_kvinnor_arbetslosa += alla_lan[i].n_kvinnor_arbetslosa; 
		getLan(-1).n_man_arbetslosa += alla_lan[i].n_man_arbetslosa; 
		getLan(-1).n_unga_arbetslosa += alla_lan[i].n_unga_arbetslosa; 
		getLan(-1).n_unga_man_arbetslosa += alla_lan[i].n_unga_man_arbetslosa; 
		getLan(-1).n_unga_kvinnor_arbetslosa += alla_lan[i].n_unga_kvinnor_arbetslosa; 

	}
	
}



