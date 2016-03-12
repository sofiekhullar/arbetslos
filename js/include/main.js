//Skapa lista med län och initiera denna.
var alla_lan = [];
init_lan();

//Load json files
loadData();

var renderer = new THREE.WebGLRenderer({ alpha: true, antialiasing: false });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setClearColor( 0xFFFFFF, 0.2 );
var EventsControls = new EventsControls( camera, renderer.domElement );
// TODO - render inside div

var controls = new THREE.TrackballControls( camera );

sceneGraph.add(sweden);
scene.add(sceneGraph);


EventsControls.attachEvent( 'onclick', function() {
	console.log(this.focused.name);
	activeLan = this.focused.name;
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
camera.lookAt(new THREE.Vector3(100,1,0));


var render = function () {


	time = new Date()/600;
	//camera.position.y = Math.sin(10*time) + 17;

	for(var lan = 1; lan < 22; lan++){
		material_array[lan].color.setRGB(1, ((Math.sin(time + lan*0.1)+1)/2)*0.3+0.7,((Math.sin(time + lan*0.1)+1)/2)*0.3+0.7);
	}
		material_array[activeLan].color.setRGB(0.5,0.9,0.5);
	

	requestAnimationFrame( render );
	controls.update();

	renderer.render(scene, camera);
};

render();