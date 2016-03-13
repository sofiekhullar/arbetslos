window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener('mousedown',onDocumentMouseDown,true);
window.addEventListener('mouseup',onDocumentMouseUp,true);
window.addEventListener('mousemove',onDocumentMouseMove,true);


function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	
}

function onDocumentMouseDown( event ) {

	//if(not clicking the menu)
	if((window.innerWidth-event.clientX) >= 500){
		IS_MOUSE_DOWN = true;
		event.preventDefault();
	}

	document.getElementById('markerat_lan_title').style.left = String(parseInt((window.innerWidth - 500)/2 - document.getElementById('markerat_lan_title').offsetWidth/2)) + "px";

}

function onDocumentMouseUp( event ){
	IS_MOUSE_DOWN = false;
}

function onDocumentMouseMove( event ){
	mouse.x = (event.clientX - window.innerWidth/2)/window.innerWidth;
	mouse.y = (event.clientY - window.innerHeight/2)/window.innerHeight;

	if(IS_MOUSE_DOWN){
		sceneGraph.rotation.y = 3*mouse.x - mouse.y*2;
		sceneGraph.rotation.z = mouse.y/2;
		sceneGraph.rotation.x = mouse.y*2.5;
	}

}

function getCurrentTime(){
	return new Date()/300;
}

function moveLan(diff_time, move_time, start, goal){

	var distance = goal - start;
	return ((Math.cos(Math.PI/move_time*(diff_time - move_time))+1)*0.5)*distance + start;
}

