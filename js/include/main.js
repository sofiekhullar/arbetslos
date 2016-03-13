//Skapa lista med län och initiera denna.
var alla_lan = [];
init_lan();
var SELECTED_LAN_ID = -1;

var first = true;

//Load json files
loadData();

var renderer = new THREE.WebGLRenderer({ alpha: true, antialiasing: false });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setClearColor( 0xFFFFFF, 0.2 );
var EventsControls = new EventsControls( camera, renderer.domElement );
// TODO - render inside div


sceneGraph.add(sweden);
scene.add(sceneGraph);



EventsControls.attachEvent( 'onclick', function() {

	if(this.focused.name == 'jurassic_plane'){
		activeLan = 22;
	}else{	
		activeLan = this.focused.name;
		activeLan = parseInt(this.focused.name);
	}

	

	var temp = SELECTED_LAN_ID;
	SELECTED_LAN_ID = selectedId(activeLan);


	if(SELECTED_LAN_ID == temp){
		SELECTED_LAN_ID = -1;
		activeLan = 22;
	}
	
	createCharts();
	createCharts2();
	createCharts3();
	
	if(VILKEN_KNAPP == 1){vis1();}
	if(VILKEN_KNAPP == 2){vis2();}
	if(VILKEN_KNAPP == 3){vis3();}
	if(VILKEN_KNAPP == 4){vis4();}
	if(VILKEN_KNAPP == 5){vis5();}
	if(VILKEN_KNAPP == 6){vis6();}
	if(VILKEN_KNAPP == 7){vis7();}
	if(VILKEN_KNAPP == 8){vis8();}
	if(VILKEN_KNAPP == 9){vis9();}

	document.getElementById("markerat_lan_title").innerHTML = getLan(SELECTED_LAN_ID).namn;
	document.getElementById("markerat_lan_title_h3").innerHTML = getLan(SELECTED_LAN_ID).namn;
	document.getElementById("markerat_lan_title_h3_2").innerHTML = getLan(SELECTED_LAN_ID).namn;
	document.getElementById("markerat_lan_title_h3_3").innerHTML = getLan(SELECTED_LAN_ID).namn;
	
});

EventsControls.attachEvent( 'mouseOver', function() {

    	this.mouseOvered.material.opacity = 0.8;
    	this.mouseOvered.scale.set(1,1.1,1);
		

		document.getElementById("hover_lan_title").innerHTML = getLan(selectedId(this.mouseOvered.name)).namn ;
		document.getElementById("hover_lan_title").style.left = String(parseInt(((mouse.x + 0.5) * window.innerWidth)) + 15) + "px";
		document.getElementById("hover_lan_title").style.top = String(parseInt(((mouse.y + 0.5) * window.innerHeight))) + "px";

	
});

EventsControls.attachEvent( 'mouseMove', function() {
	document.getElementById("hover_lan_title").style.left = String(parseInt(((mouse.x + 0.5) * window.innerWidth)) + 15) + "px";
	document.getElementById("hover_lan_title").style.top = String(parseInt(((mouse.y + 0.5) * window.innerHeight))) + "px";


});

EventsControls.attachEvent( 'mouseOut', function() {
    	this.mouseOvered.material.opacity = 1;
    	this.mouseOvered.scale.set(1,1,1);

		document.getElementById("hover_lan_title").innerHTML = "";
		document.getElementById("hover_lan_title").style.left = -100 + "px";
		document.getElementById("hover_lan_title").style.top = -100 + "px";
});



camera.position.z = -5;
camera.position.y = -23;
camera.position.x = 0;
camera.lookAt( new THREE.Vector3( 0, 0, -5 ) );

sweden.scale.set(1,3,1);
sweden.rotation.z = 3.14;
sweden.rotation.y = -3.14/2;
sweden.position.y = 1;

sceneGraph.rotation.x = -0.25;
sceneGraph.rotation.z = 0.35;

camera.up = new THREE.Vector3(0,0,-1);
//camera.lookAt(new THREE.Vector3(0,5,7));

for(var lan = 1; lan < 22; lan++){
	getLan(selectedId(lan)).mesh = mesh_array[lan];
}

for(var lan = 1; lan < 22; lan++){
	getLan(selectedId(lan)).material = material_array[lan];
	getLan(selectedId(lan)).material.color.setRGB(1,1,1);			
}

start_time = getCurrentTime;
var diff_time = getCurrentTime;
var move_time = 1.0;

var render = function () {

	/*if(VILKEN_KNAPP == 9){
		for(var lan = 1; lan < 22; lan++){
			material_array[lan].color.setRGB(1, 1, 1);
		}
	}*/
	

	time = getCurrentTime();
	diff_time = time - start_time;


	if(diff_time < move_time){

		switch(VILKEN_KNAPP) {
		    case 1: // Totalt arbetslösa
			    for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, alla_lan[lan].n_totalt_arbetslosa/100000);
					var color = alla_lan[lan].mesh.position.y/2 + 0.4;
					alla_lan[lan].material.color.setRGB(color, color, color);			
				}
		       	break;
		    case 2: // Unga arbetslösa
		        for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, alla_lan[lan].n_unga_arbetslosa/100000);
					var color = alla_lan[lan].mesh.position.y/2 + 0.4;
					alla_lan[lan].material.color.setRGB(color, color, color);	
				}
		        break;
		    case 3: // Personer med studieskuld
		        for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].n_man_studieskuld + alla_lan[lan].n_kvinnor_studieskuld)/100000);
					var color = alla_lan[lan].mesh.position.y/2 + 0.4;
					alla_lan[lan].material.color.setRGB(color, color, color);	
				}
		        break;
		    case 4: // Total studieskuld
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].studieskuld_man + alla_lan[lan].studieskuld_kvinnor)/12000000000);
		       		var color = alla_lan[lan].mesh.position.y/2 + 0.4;
					alla_lan[lan].material.color.setRGB(color, color, color);	
		       	}
		        break;
		    case 5: // Lediga jobb
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, alla_lan[lan].n_lediga_jobb/100000);
		       		var color = alla_lan[lan].mesh.position.y/2 + 0.4;
					alla_lan[lan].material.color.setRGB(color, color, color);	
		       	}
		        break;
		    case 6: // Jmfr total arbetslöshet
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].n_kvinnor_arbetslosa - alla_lan[lan].n_man_arbetslosa)/10000);
		       		var color = alla_lan[lan].mesh.position.y*2;
		       		if(color > 0){
		       			//RÖD
						alla_lan[lan].material.color.setRGB(1, Math.max(1-color, 0), Math.max(1-color, 0));
		       		}else{
		       			//BLÅ
		       			alla_lan[lan].material.color.setRGB( Math.max(1+color, 0), Math.max(1+color, 0), 1);
		       		}
		       	}
		        break;
		    case 7: // Jmfr unga arbetslöshet
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].n_unga_kvinnor_arbetslosa - alla_lan[lan].n_unga_man_arbetslosa)/10000);
		       		
		       		var color = alla_lan[lan].mesh.position.y*2;
		       		if(color > 0){
		       			//RÖD
						alla_lan[lan].material.color.setRGB(1, Math.max(1-color, 0), Math.max(1-color, 0));
		       		}else{
		       			//BLÅ
		       			alla_lan[lan].material.color.setRGB( Math.max(1+color, 0), Math.max(1+color, 0), 1);
		       		}
		       	}
		    	break;
		    case 8: // Jmfr antal med studieskuld
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, (alla_lan[lan].n_kvinnor_studieskuld - alla_lan[lan].n_man_studieskuld)/30000);
		       		var color = alla_lan[lan].mesh.position.y*2;
		       		if(color > 0){
		       			//RÖD
						alla_lan[lan].material.color.setRGB(1, Math.max(1-color, 0), Math.max(1-color, 0));
		       		}else{
		       			//BLÅ
		       			alla_lan[lan].material.color.setRGB( Math.max(1+color, 0), Math.max(1+color, 0), 1);
		       		}
		       	}
		        break;
			case 9: // NOLLSTÄLL
		    	for(var lan = 0; lan < 21; lan++){
		        	alla_lan[lan].mesh.position.y = moveLan(diff_time, move_time, alla_lan[lan].current_mesh_position, 0);
		        	var color = alla_lan[lan].material.color;
		        	var franR = moveLan(diff_time, move_time, color.r, 1);
		        	var franG = moveLan(diff_time, move_time, color.g, 1);
		        	var franB = moveLan(diff_time, move_time, color.b, 1);
					alla_lan[lan].material.color.setRGB(franR, franG, franB);	

		       	}
		        break;
		    default:
		        console.log("vad vill du");
		}
	}else{
		for(var lan = 0; lan < 21; lan++){
        	alla_lan[lan].current_mesh_position = alla_lan[lan].mesh.position.y;
		}
	}

	//alla_lan[20].mesh.position.y= Math.sin(time);

	//camera.position.y = Math.sin(10*time) + 17;

	

		material_array[activeLan].color.setRGB(0.4,0.9,1.0);
		//material_array[activeLan].color.setRGB(0.2,0.7,0.2);
		//material_array[activeLan].color.setHex(0xcef9b8);
	

	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

render();