## 01 ##

#### Description ####
Many cubes are arranged in the scene and rotated independently.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```

* Create renderer, scene and camera.

```javascript
var renderer, scene, camera;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);
  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  document.body.appendChild(renderer.domElement);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
}
```

* Set array of meshs and set up the colors, positions and rotations of meshs.

```javascript
var randomRotationX = [];
var randomRotationY = [];
for (var x = -35; x < 40; x += 5) {
for (var y = -35; y < 40; y += 5) {

  var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
  var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
  var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  mesh.position.x = x;
  mesh.position.z = y;
  mesh.scale.y = 0.5;
  mesh.rotation.x = Math.random() * 2 * Math.PI;;
var randomValueX = (Math.random() * 0.1)- 0.05;
var randomValueY = (Math.random() * 0.1)- 0.05;
  randomRotationX.push(randomValueX);
  randomRotationY.push(randomValueY);

  scene.add(mesh);
  cubes.push(mesh);
}
}
```

* This code is used to let cubes rotate independently.

```javascript
var cubes = [];
function drawFrame(){
  requestAnimationFrame(drawFrame);

  cubes.forEach(function(c,i){
    c.rotation.x += randomRotationX[i];
    c.rotation.y += randomRotationY[i];
  });
}
```
