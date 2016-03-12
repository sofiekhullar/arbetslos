var lan = function(namn, id, total_befolkning) {
	
	this.id = id;
	this.namn = namn;
	this.total_befolkning = total_befolkning;
 
	this.mesh = new THREE.Object3D;

	this.ung_befolkning; //18-24

	this.n_man_studieskuld = 0;
	this.n_kvinnor_studieskuld = 0;
	this.studieskuld_man = 0;
	this.studieskuld_kvinnor = 0;

	this.m = 0;
	this.c = 0;
	this.fp = 0;
	this.kd = 0;
	this.mp = 0;
	this.s = 0;
	this.v = 0;
	this.sd = 0;

	this.n_lediga_jobb = 0;
	this.n_platsannonser = 0;

	this.n_totalt_arbetslosa = 0;
	this.n_kvinnor_arbetslosa = 0;
	this.n_man_arbetslosa = 0;
	this.n_unga_arbetslosa = 0;
	this.n_unga_kvinnor_arbetslosa = 0;
	this.n_unga_man_arbetslosa = 0

};

function init_lan() {

	alla_lan.push(new lan("Blekinge län", 10, 156253));
	alla_lan.push(new lan("Dalarnas län", 20, 281028));
	alla_lan.push(new lan("Gotlands län", 9, 57391));
	alla_lan.push(new lan("Gävleborgs län", 21, 281815));
	alla_lan.push(new lan("Hallands län", 13, 314784));
	alla_lan.push(new lan("Jämtlands län", 23, 127376));
	alla_lan.push(new lan("Jönköpings län", 6, 347837));
	alla_lan.push(new lan("Kalmar län", 8, 237679));
	alla_lan.push(new lan("Kronobergs län", 7, 191369));
	alla_lan.push(new lan("Norrbottens län", 25, 249733));
	alla_lan.push(new lan("Skåne län", 12, 1303627));
	alla_lan.push(new lan("Stockholms län", 1, 2231439));
	alla_lan.push(new lan("Södermanlands län", 4, 283712));
	alla_lan.push(new lan("Uppsala län", 3, 354164));
	alla_lan.push(new lan("Värmlands län", 17, 275904));
	alla_lan.push(new lan("Västerbottens län", 24, 263378));
	alla_lan.push(new lan("Västernorrlands län", 22, 243897));
	alla_lan.push(new lan("Västmanlands län", 19, 264276));
	alla_lan.push(new lan("Västra Götalands län", 14, 1648682));
	alla_lan.push(new lan("Örebro län", 18, 291012));
	alla_lan.push(new lan("Östergötlands län", 5, 445661));

}

function getLan(id) {
	for(var i = 0; i < alla_lan.length; i++) {
		if(alla_lan[i].id == id) {
			return alla_lan[i];
		}
	}
}

function selectedId(simon_id){

	var id;

	if(simon_id == 20){
		id = 10;
	}
	else if(simon_id == 6){
		id = 20;
	}
	else if(simon_id == 16){
		id = 9;
	}
	else if(simon_id == 5){
		id = 21;
	}
	else if(simon_id == 19){
		id = 13;
	}
	else if(simon_id == 3){
		id = 23;
	}
	else if(simon_id == 14){
		id = 6;
	}
	else if(simon_id == 18){
		id = 8;
	}
	else if(simon_id == 17){
		id = 7;
	}
	else if(simon_id == 1){
		id = 25;
	}
	else if(simon_id == 21){
		id = 12;
	}
	else if(simon_id == 10){
		id = 1;
	}
	else if(simon_id == 12){
		id = 4;
	}
	else if(simon_id == 7){
		id = 3;
	}
	else if(simon_id == 8){
		id = 17;
	}
	else if(simon_id == 2){
		id = 24;
	}
	else if(simon_id == 4){
		id = 22;
	}
	else if(simon_id == 9){
		id = 19;
	}
	else if(simon_id == 15){
		id = 14;
	}
	else if(simon_id == 11){
		id = 18;
	}
	else if(simon_id == 13){
		id = 5;
	}

	return id;
}
