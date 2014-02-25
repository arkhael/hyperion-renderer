

function degToRad(degrees) {
	return degrees * Math.PI / 180;
}

var rPyramid = 0;
var rCube = 0;

var lastTime = 0;

function animate() {
	
	var timeNow = new Date().getTime();
	var elapsed = 0;
	if (lastTime != 0) {
		elapsed = timeNow - lastTime;

		rPyramid += (90 * elapsed) / 1000.0;
		rCube -= (75 * elapsed) / 1000.0;
	}
	lastTime = timeNow;

	camController.update(elapsed);
}


function tick() {
	requestAnimFrame(tick);
	animate();
	context.draw();
}

window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
           window.setTimeout(callback, 1000/60);
         };
})();

var context;
var scene;
var camController;

function start() {
	context = new GContext(document.getElementById("glcanvas"));
	scene   = new GScene();
	camera  = new GCamera();
	
	scene.setCamera(camera);
	
	camera.setLookAt(0, 2, 0);
	camera.setUp(0, 1, 0);
	camera.setEye(1, 2, 1);
	
	camController = new GCameraController();
	camController.bindCamera(camera);
	
	context.setScene(scene);
	
	tick();
	
	var ldr = new GObjLoader(scene);
	ldr.loadObj("office3d/18361-obj-4/", "OfficeOBJ.obj");
	//ldr.loadObj("office3d/18361-50509/", "OfficeOBJ.obj");
}