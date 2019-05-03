//Global variables
var scene, camera, renderer;
var color;
//Rotation converter
var de2ra= function (degree){
  return degree*(Math.PI/180);
};

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
  color= Math.random()*0xffffff;
  var material1 = new THREE.MeshBasicMaterial( { color:color,
  transparent: true } );
  // Create a Cube Mesh with basic material ---------
  var geometry1 = new THREE.BoxGeometry(50, 250, 50);
  var wireframe1 = new THREE.WireframeGeometry( geometry1);
  var line1 = new THREE.LineSegments( wireframe1,material1 );
  line1.position.x = -400;
  line1.position.y =  100 ;
  line1.position.z = -1000;


  // Add mesh to scene
  scene.add( line1 );

  var wireframe1 = new THREE.WireframeGeometry( geometry1);
  var line10 = new THREE.LineSegments( wireframe1,material1 );
  line10.position.x = 200;
  line10.position.y =  100 ;
  line10.position.z = -1000;


  // Add mesh to scene
  scene.add( line10 );

  var geometry2 = new THREE.BoxGeometry(250, 50, 50);
  var wireframe1 = new THREE.WireframeGeometry( geometry2);
  var line2 = new THREE.LineSegments( wireframe1,material1  );
  line2.position.x = -300;
  line2.position.y =  200;
  line2.position.z = -1000;


  // Add mesh to scene
  scene.add( line2 );

  var wireframe1 = new THREE.WireframeGeometry( geometry2);
  var line11 = new THREE.LineSegments( wireframe1,material1  );
  line11.position.x = 300;
  line11.position.y =  200;
  line11.position.z = -1000;


  // Add mesh to scene
  scene.add( line11 );

  var line12 = new THREE.LineSegments( wireframe1,material1  );
  line12.position.x = 300;
  line12.position.y =  0;
  line12.position.z = -1000;


  // Add mesh to scene
  scene.add( line12 );

  var line13 = new THREE.LineSegments( wireframe1,material1  );
  line13.position.x = 300;
  line13.position.y =  -200;
  line13.position.z = -1000;


  // Add mesh to scene
  scene.add( line13 );

  var wireframe1 = new THREE.WireframeGeometry( geometry1);
  var line14 = new THREE.LineSegments( wireframe1,material1  );
  line14.position.x = 400;
  line14.position.y =  -100;
  line14.position.z = -1000;


  // Add mesh to scene
  scene.add( line14 );


  var wireframe1 = new THREE.WireframeGeometry( geometry2);
  var line3 = new THREE.LineSegments( wireframe1,material1  );
  line3.position.x = -300;
  line3.position.y = 0;
  line3.position.z = -1000;


  // Add mesh to scene
  scene.add( line3 );

  var wireframe1 = new THREE.WireframeGeometry( geometry1);
  var line4 = new THREE.LineSegments( wireframe1,material1  );
  line4.position.x = -200;
  line4.position.y = -100;
  line4.position.z = -1000;


  // Add mesh to scene
  scene.add( line4 );

  var wireframe1 = new THREE.WireframeGeometry( geometry2);
  var line5 = new THREE.LineSegments( wireframe1,material1  );
  line5.position.x = -300;
  line5.position.y = -200;
  line5.position.z = -1000;


  // Add mesh to scene
  scene.add( line5 );

  var wireframe1 = new THREE.WireframeGeometry( geometry2);
  var line6 = new THREE.LineSegments( wireframe1,material1  );
  line6.position.x = 0;
  line6.position.y =  200;
  line6.position.z = -1000;


  // Add mesh to scene
  scene.add( line6 );

  var wireframe1 = new THREE.WireframeGeometry( geometry2);
  var line7 = new THREE.LineSegments( wireframe1,material1  );
  line7.position.x = 0;
  line7.position.y =  -200;
  line7.position.z = -1000;


  // Add mesh to scene
  scene.add( line7 );

  var geometry3 = new THREE.BoxGeometry(50, 450, 50);
  var wireframe1 = new THREE.WireframeGeometry( geometry3);
  var line8 = new THREE.LineSegments( wireframe1,material1 );
  line8.position.x = -100;
  line8.position.y =  0;
  line8.position.z = -1000;

  scene.add( line8 );

  var wireframe1 = new THREE.WireframeGeometry( geometry3);
  var line9 = new THREE.LineSegments( wireframe1,material1 );
  line9.position.x = 100;
  line9.position.y =  0;
  line9.position.z = -1000;

  scene.add( line9 );
  var controller = new function(){
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;
    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = 0;
    this.rotationX= 0;
    this.rotationY= 0;
    this.rotationZ= 0;

    this.boxColor= color;
    this.boxOpacity = 1;
  }

  var gui = new dat.GUI();
  var f1 = gui.addFolder('Scale');
  var f2 = gui.addFolder('Position');
  var f3 = gui.addFolder('Rotation');
  f1.add(controller,'scaleX',0.5,500).onChange(function(){
     line1.scale.x = (controller.scaleX);
  });
  f1.add(controller,'scaleY',0.5,500).onChange(function(){
     line1.scale.y = (controller.scaleY);
  });
  f1.add(controller,'scaleZ',0.5,500).onChange(function(){
     line1.scale.z = (controller.scaleZ);
  });

  f2.add(controller,'positionX',-1000,1000).onChange(function(){
    line1.position.x = (controller.positionX);
  });
  f2.add(controller,'positionY',-1000,1000).onChange(function(){
    line1.position.y = (controller.positionY);
  });
  f2.add(controller,'positionZ',-1000,1000).onChange(function(){
    line1.position.z = (controller.positionZ);
  });

  f3.add(controller,'rotationX',-180,180).onChange(function(){
    line1.rotation.x = de2ra(controller.rotationX);
  });
  f3.add(controller,'rotationY',-180,180).onChange(function(){
    line1.rotation.y = de2ra(controller.rotationY);
  });
  f3.add(controller,'rotationZ',-180,180).onChange(function(){
    line1.rotation.z = de2ra(controller.rotationZ);
  });

  gui.addColor( controller, 'boxColor', color ).onChange( function() {
   material1.color.setHex( dec2hex(controller.boxColor) );
 });
  gui.add( controller, 'boxOpacity', 0.1, 3 ).onChange( function() {
   material1.opacity = (controller.boxOpacity);
 });
}

// Render Loop
var render = function () {
  requestAnimationFrame( render );
  renderer.setClearColor("#FFFFFF");

  // Render the scene
  renderer.render(scene, camera);
};
function dec2hex(i) {
  var result = "0x000000";
  if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
  else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
  else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
  else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
  else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
  else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
  if (result.length == 8){return result;}
}
init();
geometry();
render();
