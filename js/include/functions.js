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
}

function onDocumentMouseUp( event ){
	IS_MOUSE_DOWN = false;
}

function onDocumentMouseMove( event ){
	mouse.x = (event.clientX - window.innerWidth/2)/window.innerWidth;
	mouse.y = (event.clientY - window.innerHeight/2)/window.innerHeight;

	if(IS_MOUSE_DOWN){
		sceneGraph.rotation.y = mouse.x;
		sceneGraph.rotation.z = mouse.y;
	}

}

function getCurrentTime(){
	return new Date()/300;
}

