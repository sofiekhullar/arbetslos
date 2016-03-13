
var container = document.getElementById( 'container' );
var clicked = 0;
var clicked2 = 0;
var mamma = 300;
var height = 70;
var textureLoader = new THREE.TextureLoader();
var mouse = new THREE.Vector2();
var lan_array = [];
var controls;
var IS_MOUSE_DOWN = false;
var start_time = 0;
var VILKEN_KNAPP = 9;
var TEMP_COLOR = 0;
var TEMP_COLOR2 = 0;
var BUTTON_PRESSED_OPACITY = 0.5;
var BUTTON_UNPRESSED_OPACITY = 0.8;





var scene = new THREE.Scene();
//scene.fog = new THREE.FogExp2( 0xcccccc, 0.009 );
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );


scene.add(camera);


var sceneGraph = new THREE.Object3D;
var sweden = new THREE.Object3D;


var activeLan = 22;



var A_light = new THREE.AmbientLight( 0xaaaaaa ); // soft white light
sceneGraph.add( A_light );

var light = new THREE.DirectionalLight( 0x333333,0.8 );
light.position.set( 20, -5, -20 ).normalize();
sceneGraph.add(light);



//////////////////////////// OBJ setup //////////////////////////////

onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
		}
	};
onError = function ( xhr ) {};

THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );



////////////////////// Ladda in alla län ////////////////////////
var loader_array = [];
var material_array = [];
var mesh_array = [];


for(var id = 1; id < 25; id++){

	var material = new THREE.MeshLambertMaterial( {color: 0x3344aa} );
	material_array.push(material);
}

for(var id = 1; id < 23; id++){

	var meshObject = new THREE.Object3D;
	mesh_array.push(meshObject);
	sweden.add(meshObject);
}

for(var id = 1; id < 22; id++){

var loader = new THREE.OBJMTLLoader();
    loader_array[id] = loader;
}