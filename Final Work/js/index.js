var renderer, scene, camera;
var controls, clock;
var spheresNum = 80;
var listener = new THREE.AudioListener();
var sound = new THREE.Audio( listener );
var audioLoader = new THREE.AudioLoader();
function init() {
  scene = new THREE.Scene();
  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.y = 0;
  camera.position.z = 0;
  camera.rotation.x = -45 * Math.PI / 180;
  camera.lookAt(scene)

        var light1 = new THREE.AmbientLight(0xffffff, 0.5);
        light1 .position.set(100, 0, 100);
        scene.add(light1);

        var light2 = new THREE.PointLight(0xffffff, 0.5);
        light2 .position.set(0, 100, 100);
        scene.add(light2);
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x000000);
  renderer.setSize(W, H);
    document.body.appendChild(renderer.domElement);
      clock = new THREE.Clock();
  controls = new THREE.FirstPersonControls(camera);
  controls.movementSpeed = 50;
  controls.lookSpeed = 0.1;


    for (var i = 0; i < spheresNum; i++) {


var geometry = new THREE.SphereGeometry( 20, 60, 60, 60 );
var randomSelection = Math.round(Math.random()*5) + 1;
var texture = new THREE.TextureLoader().load("textures/textures" + randomSelection+".jpg");
	material = new THREE.MeshPhongMaterial( { map: texture })  ;
      mesh = new THREE.Mesh( geometry, material );
mesh.position.set(Math.random()*300-100, Math.random()*300-100, Math.random()*300-100);
      var randSize = Math.random() * 0.8;
      mesh.scale.x = randSize;
      mesh.scale.y = randSize;
      mesh.scale.z = randSize;
      var glowMesh	= new THREEx.GeometricGlowMesh(mesh)
    mesh.add(glowMesh.object3d)
    var insideUniforms	= glowMesh.insideMesh.material.uniforms
  insideUniforms.glowColor.value.set('#4511a4')
  var outsideUniforms	= glowMesh.outsideMesh.material.uniforms
	outsideUniforms.glowColor.value.set('#4511a4')
      scene.add(mesh);

  }
}

function drawFrame(){

  requestAnimationFrame(drawFrame);
  var INV_MAX_FPS = 1 / 100, frameDelta = 0;
  frameDelta += clock.getDelta();
  while (frameDelta >= INV_MAX_FPS) {
    update(INV_MAX_FPS);
    frameDelta -= INV_MAX_FPS;
  }

  audioLoader.load( 'audio/001.mp3', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( false );
    sound.setVolume( 0.5 );
    sound.play();
    });
  renderer.render(scene, camera);
}
function update(delta) {
  controls.update(delta);
  if(controls.object.position.y < mesh.position.y + 10){
      controls.object.position.y = 100;
  }
  //console.log(controls);
}
init();
drawFrame();
