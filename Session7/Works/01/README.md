## 01 ##

#### Description ####
Set up 10 eyes and let them look at the mouse.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```

* Create camera, scene, renderer, mesh.

```javascript
var camera, scene, renderer;
var image;
var mouseX = 0, mouseY = 0;
var container, stats;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );


	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 150 );
  scene.add( camera );

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );
  var geometry = new THREE.SphereGeometry( 30, 32, 16 );

  var material = new THREE.MeshPhongMaterial( {
    color: 0xffffff,
    specular: 0x050505,
    shininess: 50,
    map: THREE.ImageUtils.loadTexture('images/eye.png'),
  });
}
```

* Create array of eyes and set the position and scale of them.

```javascript
var eyesNum = 10;
var eyes = [];
var xPos = [];
var yPos = [];

for (var i = 0; i < eyesNum; i++) {
	  mesh = new THREE.Mesh( geometry, material );

		xPos[i] = Math.random() * 100 - 50;
		yPos[i] = Math.random() * 100 - 50;

		mesh.position.x = xPos[i];
		mesh.position.y = yPos[i];
		var randSize = Math.random() * 0.8;
		mesh.scale.x = randSize;
		mesh.scale.y = randSize;
		mesh.scale.z = randSize;
	scene.add( mesh );
	eyes.push( mesh );
}
```
