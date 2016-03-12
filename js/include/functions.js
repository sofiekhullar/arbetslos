

function clickObject(){
	if(!clicked){
		$( "#myCanvas" ).animate({
		opacity: 0.7,
		borderLeftWidth: mamma.toString() + "px",
		width: (300-mamma).toString() + "px" ,
		height: height.toString() + "px"

		});
		clicked = 1;
	}else{
		$( "#myCanvas" ).animate({
		opacity: 0.2,
		borderLeftWidth: "1px",
		width: "300px" ,
		height: height.toString() + "px"
		});
		clicked = 0;
	}
}

function clickObject2(){
	if(!clicked2){
		$( "#myCanvas2" ).animate({
		opacity: 0.7,
		borderLeftWidth: mamma.toString() + "px",
		width: (300-mamma).toString() + "px" ,
		height: height.toString() + "px"

		});
		clicked2 = 1;
	}else{
		$( "#myCanvas2" ).animate({
		opacity: 0.2,
		borderLeftWidth: "1px",
		width: "300px" ,
		height: height.toString() + "px"
		});
		clicked2 = 0;
	}
}






window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener('mousedown',onDocumentMouseDown,true);


function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseDown( event ) {

	event.preventDefault();
	
	mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
	mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;
	


}