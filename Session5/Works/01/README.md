## 01 ##

#### Description ####
This code creates array of cubes and control cube independently.

#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```

* Create renderer, scene and camera.

```javascript
var renderer, scene, camera;

function init() {
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
}
```

* Set array of meshs and set up the colors, positions and rotations of meshs

```javascript
var randomRotationX = [];
var randomRotationY = [];
for (var x = -10; x <= 10; x += 5) {
for (var y = -10; y <= 10; y += 5) {

  var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
  if (x==-5 && y==-5){
    boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
  } else if (x==5 && y ==5){
    boxMaterial = new THREE.MeshLambertMaterial({color: 0xF8B195});
  } else {
    boxMaterial = new THREE.MeshLambertMaterial({color: 0x355C7D});
  }

  var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  mesh.position.x = x;
  mesh.position.z = y;
  mesh.rotation.x = Math.random() * 2 * Math.PI;;
  mesh.rotation.y = Math.random() * 2 * Math.PI;;
  mesh.rotation.z = Math.random() * 2 * Math.PI;;
var randomValueX = (Math.random() * 0.1)- 0.05;
  randomSpeedX.push(randomValueX);
  scene.add(mesh);
  cubes.push(mesh);
}
}
```

* This code is used to control cube independently.

```javascript
var cubes = [];
function drawFrame(){
  requestAnimationFrame(drawFrame);

  for (var i = 0; i < 5; i ++){
    cubes[6].rotation.x += randomSpeedX[6];
    cubes[18].rotation.x += randomSpeedX[18];
  }
  renderer.render(scene, camera);
}
```
