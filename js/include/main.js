var renderer = new THREE.WebGLRenderer({ alpha: true, antialiasing: false });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
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

var render = function () {

	time = new Date()/800;

	for(var lan = 1; lan < 22; lan++){
		material_array[lan].color.setRGB(0.1,((Math.sin(time + lan*0.1)+1)/1)*0.2, 0.1);
	}
		material_array[activeLan].color.setRGB(0.5,0.9,0.5);
	

	requestAnimationFrame( render );
	controls.update();

	renderer.render(scene, camera);
};

render();