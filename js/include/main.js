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

	activeLan = this.focused.name;
	
	activeLan = parseInt(this.focused.name);

	var temp = SELECTED_LAN_ID;
	SELECTED_LAN_ID = selectedId(activeLan);




	if(SELECTED_LAN_ID == temp){
		SELECTED_LAN_ID = -1;
		activeLan = 22;
	}
	
	createCharts();
	createCharts2();
	createCharts3();

	document.getElementById("markerat_lan_title").innerHTML = getLan(SELECTED_LAN_ID).namn;
	
});

EventsControls.attachEvent( 'mouseOver', function() {
    	this.mouseOvered.material.opacity = 0.8;
    	this.mouseOvered.scale.set(1,1.1,1);
		this.mouseOvered.material.color.setHex(0x00ff00);

		document.getElementById("hover_lan_title").innerHTML = getLan(selectedId(this.mouseOvered.name)).namn ;
		document.getElementById("hover_lan_title").style.left = String(parseInt(((mouse.x + 1) * window.innerWidth)/2)) + "px";
		document.getElementById("hover_lan_title").style.top = String(parseInt(((mouse.y + 1) * window.innerHeight)/2)) + "px";


});

EventsControls.attachEvent( 'mouseOut', function() {
    	this.mouseOvered.material.opacity = 1;
    	this.mouseOvered.scale.set(1,1,1);
		this.mouseOvered.material.color.setHex(0xffffff);

		document.getElementById("hover_lan_title").style.left = -100 + "px";
		document.getElementById("hover_lan_title").style.top = -100 + "px";
});


sweden.scale.set(1,3,1);
camera.up = new THREE.Vector3(0,1,0);
camera.lookAt(new THREE.Vector3(0,1,10));

for(var lan = 0; lan < 21; lan++){
	alla_lan[lan].mesh = mesh_array[lan];
}

start_time = getCurrentTime;
var diff_time = getCurrentTime;


var render = function () {


	time = getCurrentTime();
	diff_time = time - start_time;

	if(diff_time < 2.0){

		switch(VILKEN_KNAPP) {
		    case 1:
		        alla_lan[1].mesh.position.y = (Math.cos(Math.PI/2*(diff_time - 2))+1)*0.5;
		        break;
		    case 2:
		        alla_lan[2].mesh.position.y = (Math.cos(Math.PI/2*(diff_time - 2))+1)*0.5;
		        break;
		    case 3:
		        alla_lan[3].mesh.position.y = (Math.cos(Math.PI/2*(diff_time - 2))+1)*0.5;
		        break;
		    case 4:
		        alla_lan[4].mesh.position.y = (Math.cos(Math.PI/2*(diff_time - 2))+1)*0.5;
		        break;
		    default:
		        console.log("vad vill du");
		}


		
	}
	//alla_lan[20].mesh.position.y= Math.sin(time);

	//camera.position.y = Math.sin(10*time) + 17;

	for(var lan = 1; lan < 22; lan++){
		// Mesh
		//mesh_array[lan].position.set(0, ((Math.sin(time + lan*0.1)+1)/2)*1,0);
		// Color
		//material_array[lan].color.setRGB(1, ((Math.sin(time + lan*0.1)+1)/2)*0.3+0.7,((Math.sin(time + lan*0.1)+1)/2)*0.3+0.7);
		material_array[lan].color.setRGB(1, 1, 1);
	}

		material_array[activeLan].color.setRGB(0.9,0.9,0.9);
	

	requestAnimationFrame( render );

	renderer.render(scene, camera);
};

render();