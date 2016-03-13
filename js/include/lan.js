var lan = function(namn, id, total_befolkning) {
	
	this.id = id;
	this.namn = namn;
	this.total_befolkning = total_befolkning;
 
	this.mesh = new THREE.Object3D;
	this.material = 0;

	this.ung_befolkning = 0; //18-24

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

	this.current_mesh_position = 0;
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
	alla_lan.push(new lan("Hela Sverige", -1, 9851017));

}

function getLan(id) {
	for(var i = 0; i < alla_lan.length; i++) {
		if(alla_lan[i].id == id) {
			return alla_lan[i];
		}
	}
}



function selectedId(simon_id){
	if(simon_id == 20)
		return 10;
	else if(simon_id == 6)
		return 20;
	else if(simon_id == 16)
		return 9;
	else if(simon_id == 5)
		return 21;
	else if(simon_id == 19)
		return 13;
	else if(simon_id == 3)
		return 23;
	else if(simon_id == 14)
		return 6;
	else if(simon_id == 18)
		return 8;
	else if(simon_id == 17)
		return 7;
	else if(simon_id == 1)
		return 25;
	else if(simon_id == 21)
		return 12;
	else if(simon_id == 10)
		return 1;
	else if(simon_id == 12)
		return 4;
	else if(simon_id == 7)
		return 3;
	else if(simon_id == 8)
		return 17;
	else if(simon_id == 2)
		return 24;
	else if(simon_id == 4)
		return 22;
	else if(simon_id == 9)
		return 19;
	else if(simon_id == 15)
		return 14;
	else if(simon_id == 11)
		return 18;
	else if(simon_id == 13)
		return 5;

	return -1;

}

