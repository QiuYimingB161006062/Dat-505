## 01 ##

#### Description ####
Add different shapes, materials and textures to the geometry in the scene.

#### Usage ####
```html
<script src="build/three.js"></script>
```

* Create different geometries, materials and textures.

```javascript
//Global variables
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material1, mesh2;
var geometry3, material2, mesh3;
var geometry4, material2, mesh4;
var geometry5, material3, mesh5;
var geometry6, material3, mesh6;

var texture1 = new THREE.TextureLoader().load("textures/1.jpg");
var material1 = new THREE.MeshBasicMaterial( { map: texture1} );

var texture2 = new THREE.TextureLoader().load("textures/2.jpg");
var material2 = new THREE.MeshBasicMaterial( { map: texture2} );

var texture3 = new THREE.TextureLoader().load("textures/3.jpg");
var material3 = new THREE.MeshBasicMaterial( { map: texture3} );

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.SphereGeometry(250, 250, 250);
  //material1 = new THREE.MeshBasicMaterial( { color: "#FFC0CB" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;
  mesh1.position.x = -200;

  // Add mesh to scene
  scene.add( mesh1 );

  // Create a Cube Mesh with basic material ---------
  geometry2 = new THREE.SphereGeometry(250, 250, 250);
  //material1 = new THREE.MeshBasicMaterial( { color: "#FFC0CB" } );
  mesh2 = new THREE.Mesh( geometry2, material1 );
  mesh2.position.z = -1000;
  mesh2.position.x = 200;


  // Add mesh to scene
  scene.add( mesh2 );

  // Create a Cube Mesh with basic material ---------
  geometry3 = new THREE.SphereGeometry(25, 25, 25);
  //material2 = new THREE.MeshBasicMaterial( { color: "#C71585" } );
  mesh3 = new THREE.Mesh( geometry3, material2);
  mesh3.position.z = -400;
  mesh3.position.x = -110;
  //mesh3.position.y = -125;

  // Add mesh to scene
  scene.add( mesh3 );

  // Create a Cube Mesh with basic material ---------
  geometry4 = new THREE.SphereGeometry(25, 25, 25);
  //material2 = new THREE.MeshBasicMaterial( { color: "#C71585" } );
  mesh4 = new THREE.Mesh( geometry4, material2 );
  mesh4.position.z = -400;
  mesh4.position.x = 110;
  //mesh4.position.y = -125;

  // Add mesh to scene
  scene.add( mesh4 );

  geometry5 = new THREE.BoxGeometry(500, 25, 25);
  //material3 = new THREE.MeshBasicMaterial( { color: "#000000" } );
  mesh5 = new THREE.Mesh( geometry5, material3 );
  mesh5.position.z = -500;
  mesh5.position.x = 0;

  //mesh4.position.y = -125;

  // Add mesh to scene
  scene.add( mesh5 );

  geometry6 = new THREE.BoxGeometry(500, 25, 25);
  //material3 = new THREE.MeshBasicMaterial( { color: "#000000" } );
  mesh6 = new THREE.Mesh( geometry6, material3 );
  mesh6.position.z = -500;
  mesh6.position.x = 0;

  //mesh4.position.y = -125;

  // Add mesh to scene
  scene.add( mesh6 );
}
```

* Set rotation of each mesh.

```javascript
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;

  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.y += 0.01;

  mesh3.rotation.x += 0.09; //Continuously rotate the mesh
  mesh3.rotation.y += 0.09;

  mesh4.rotation.x += 0.09; //Continuously rotate the mesh
  mesh4.rotation.y += 0.09;

  mesh5.rotation.z -= 0.01; //Continuously rotate the mesh
  mesh5.rotation.y += 0;


  mesh6.rotation.z += 0.01; //Continuously rotate the mesh
  mesh6.rotation.y += 0;




  renderer.setClearColor("#FFFF00");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
```
