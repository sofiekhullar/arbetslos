//Skapa lista med län och initiera denna.
var alla_lan = [];
init_lan();
var SELECTED_LAN_ID = -1;

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

	console.log(this.focused.name);
	activeLan = this.focused.name;
	
	activeLan = parseInt(this.focused.name);

	var temp = SELECTED_LAN_ID;
	SELECTED_LAN_ID = selectedId(activeLan);
	
	console.log(getLan(SELECTED_LAN_ID).n_kvinnor_studieskuld);
	console.log(getLan(SELECTED_LAN_ID).n_man_studieskuld);
	console.log(activeLan);

	document.getElementById("markerat_lan_title").innerHTML = getLan(SELECTED_LAN_ID).namn;


	if(SELECTED_LAN_ID == temp){
		SELECTED_LAN_ID = -1;
		activeLan = 22;
	}
	
	createCharts();
	createCharts2();
	createCharts3();
	
});

EventsControls.attachEvent( 'mouseOver', function() {

    	this.mouseOvered.material.opacity = 0.8;
    	this.mouseOvered.scale.set(1,1.1,1);
		this.mouseOvered.material.color.setHex(0x00ff00);
});

EventsControls.attachEvent( 'mouseOut', function() {
    	this.mouseOvered.material.opacity = 1;
    	this.mouseOvered.scale.set(1,1,1);
		this.mouseOvered.material.color.setHex(0xffffff);
});


sweden.scale.set(1,3,1);
camera.up = new THREE.Vector3(0,1,0);
camera.lookAt(new THREE.Vector3(0,1,10));

for(var lan = 0; lan < 21; lan++){
	alla_lan[lan].mesh = mesh_array[lan];
}


console.log(alla_lan[1].mesh.position);


var render = function () {


	time = new Date()/300;
	//alla_lan[20].mesh.position.y= Math.sin(time);

	//camera.position.y = Math.sin(10*time) + 17;

	for(var lan = 1; lan < 22; lan++){
		// Mesh
		//mesh_array[lan].position.set(0, ((Math.sin(time + lan*0.1)+1)/2)*1,0);
		// Color
		//material_array[lan].color.setRGB(1, ((Math.sin(time + lan*0.1)+1)/2)*0.3+0.7,((Math.sin(time + lan*0.1)+1)/2)*0.3+0.7);
		material_array[lan].color.setRGB(1, 1, 1);
	}

		material_array[activeLan].color.setRGB(0.5,0.9,0.5);
	

	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

render();