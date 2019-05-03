## 03 ##

#### Description ####
Random create objects with different textures fall down.

#### Usage ####
```html
<script src="build/three.min.js"></script>
```

* Create camera, scene, renderer, geometry, material and mesh.

```javascript
var camera, scene, renderer, geometry, material, mesh;
var texture;
var cubesNum = 10;

var cubes = [];
var speed = [];

function init() {
	scene = new THREE.Scene();
	geometry = new THREE.BoxGeometry( 10, 10, 10 );

	for (var i=0; i<cubesNum; i++){
		var randomValue = Math.random() * 0.5;
		speed.push(randomValue);

	var randomSelection = Math.round(Math.random()*4)+1;

	texture = new THREE.TextureLoader().load( "textures/texture"+randomSelection+".jpg" );
	material = new THREE.MeshBasicMaterial( { map: texture} );
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.y = -50;
	scene.add( mesh );
	cubes.push( mesh );
}

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 1000 );
	camera.position.z = 30;
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
}
```

* Set the falling speed and self-rotating speed of the objects.

```javascript
function animate() {
	requestAnimationFrame( animate );

	for(var i=0; i<cubesNum; i++){
			cubes[i].rotation.x += speed[i] / 100;
			cubes[i].rotation.y += speed[i] / 80;
			cubes[i].position.y -= speed[i];

			if (cubes[i].position.y <- 30){
				cubes[i].position.y = 35;
				cubes[i].position.x = (Math.random()*-20) +10;
				cubes[i].scale.x = Math.random();
				cubes[i].scale.y = Math.random();
				cubes[i].scale.z = Math.random();
	}
}
	renderer.render( scene, camera );
}

init();
animate();
```
