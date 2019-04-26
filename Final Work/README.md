# Final Work
Since I was young, I have been dreaming of traveling in space and appreciating the vastness of the universe, so I made this work of art. However, due to the limited technology, it did not achieve the desired effect.I used the following functions, such as first person control, sound, defining internal and external luminescence and color, randomly selecting textures and generating spheres，etc.

My Github link:https://github.com/QiuYimingB161006062/Dat-505
Name:QiuYiming NUA Student ID:B161006062
# Usage


This is the first person control code.You can control how fast the view moves and how fast the view rotates, and the first-person view component is invoked in the HTML.
```javascript
clock = new THREE.Clock();
controls = new THREE.FirstPersonControls(camera);
controls.movementSpeed = 50;
controls.lookSpeed = 0.1;
requestAnimationFrame(drawFrame);
var INV_MAX_FPS = 1 / 100, frameDelta = 0;
frameDelta += clock.getDelta();
while (frameDelta >= INV_MAX_FPS) {
  update(INV_MAX_FPS);
  frameDelta -= INV_MAX_FPS;
}
```

This is the sound code.This is auto-playing and loading my own imported music.
```javascript
audioLoader.load( 'audio/001.mp3', function( buffer ) {
  sound.setBuffer( buffer );
  sound.setLoop( false );
  sound.setVolume( 0.5 );
  sound.play();
  });
renderer.render(scene, camera);
}
```

This is creating a sphere and generating the number of definitions in a random range.
```javascript
var geometry = new THREE.SphereGeometry( 20, 60, 60, 60 );
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
```

This is a random texture.I first set the map range, limited map selection range.
```javascript
var randomSelection = Math.round(Math.random()*5) + 1;
var texture = new THREE.TextureLoader().load("textures/textures" + randomSelection+".jpg");
	material = new THREE.MeshPhongMaterial( { map: texture })  ;
  ```

  This is the definition of inner and outer glow effects as well as colors.
  ```javascript
  var glowMesh	= new THREEx.GeometricGlowMesh(mesh)
mesh.add(glowMesh.object3d)
var insideUniforms	= glowMesh.insideMesh.material.uniforms
insideUniforms.glowColor.value.set('#4511a4')
var outsideUniforms	= glowMesh.outsideMesh.material.uniforms
outsideUniforms.glowColor.value.set('#4511a4')
  scene.add(mesh);

}
```
