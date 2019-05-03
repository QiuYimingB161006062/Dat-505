var renderer, scene, camera;
var cubes = [];
var rotX = [];
var rotY = [];
var scaleX = [];
var scaleY = [];
var scaleZ = [];
var scaleCube = [];

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
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <= 10; x += 5) { // Start from -10 and sequentially add one every 5 pixels
    for (var y = -10; y <= 10; y += 5) {

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      var texture1 = new THREE.TextureLoader().load( "textures/" + Math.floor(Math.random()*4) +".jpg");
      var texture2 = new THREE.TextureLoader().load( "textures/" + Math.floor(Math.random()*4) +".jpg");
      var texture3 = new THREE.TextureLoader().load( "textures/" + Math.floor(Math.random()*4) +".jpg");

      var boxMaterial = new THREE.MeshLambertMaterial({map: texture1});
//Define diffierent textures to boxMaterial
      if (x==-5 && y==-5){
        boxMaterial = new THREE.MeshLambertMaterial({map: texture1});
      } else if (x==5 && y ==5){
        boxMaterial = new THREE.MeshLambertMaterial({map: texture2});
      } else {
        boxMaterial = new THREE.MeshLambertMaterial({map: texture3});
      }

      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = y;
      mesh.rotation.x = Math.random() * 2 * Math.PI;;
      mesh.rotation.y = Math.random() * 2 * Math.PI;;
      mesh.rotation.z = Math.random() * 2 * Math.PI;;
      var rotValX = (Math.random() * 0.05) - 0.025;
      var rotValY = (Math.random() * 0.05) - 0.025;
      var scValX = Math.random() - 0.05;
      var scValY = Math.random() - 0.05;
      var scValZ = Math.random() - 0.05;
      rotX.push(rotValX);
      rotY.push(rotValY);
      scaleX.push(scValX);
      scaleY.push(scValY);
      scaleZ.push(scValZ);
      scaleCube.push(scValX);
      scene.add(mesh);
      cubes.push(mesh);
    }
  }
  console.log(cubes);
  document.body.appendChild(renderer.domElement);
}

//var scaleCube = -3;

function drawFrame(){
  requestAnimationFrame(drawFrame);
  scaleCube += 0.01;

  cubes.forEach(function(c, i) {
    c.rotation.x += rotX[i];
    c.rotation.y += rotY[i];
    c.scale.x += rotY[i];
    scaleCube[i] += scaleX[i];
    if ( scaleCube[i] >  scaleX[i] ) scaleCube[i] =  -scaleX[i];

  });
  renderer.render(scene, camera);
}

init();
drawFrame();
