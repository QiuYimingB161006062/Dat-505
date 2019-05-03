## 02 ##

#### Description ####
The obj had been added into the scene and randomly distributed in the scene. When the mouse touched an object, the color of the object changes randomly.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
```

* Create camera, scene, raycaster, renderer and raycaster.

```javascript
var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(), INTERSECTED;
var object;

init();
animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );

  var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
  raycaster = new THREE.Raycaster();
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );
}
```

* This code is used to load obj and mtl.

```javascript
var objects = [];
for (var i=0; i<70; i++){
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("1.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("1.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 0.5;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*200-100, Math.random()*200-100, Math.random()*200-100);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh);
    });
  });
}

```

* This code is used to random changes in object color when the mouse emits rays through the object.

```javascript
raycaster.setFromCamera( mouse, camera );
var intersects = raycaster.intersectObjects( objects, true );

if ( intersects.length > 0 ) {
  if ( INTERSECTED != intersects[ 0 ].object ) {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = intersects[ 0 ].object;
    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    INTERSECTED.material.emissive.setHex( Math.random()*0xff0000 );
  }
} else {
  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  INTERSECTED = null;
}
```
