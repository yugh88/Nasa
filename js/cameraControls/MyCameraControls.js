function MyCameraControls(camera, canvas) {
    const controls = new THREE.OrbitControls(camera, canvas);    

    this.update = function () {
        controls.update();
    }

    // limit the zooming
    controls.minDistance = 20;
    controls.maxDistance = 600;
    controls.zoomSpeed = 1.8;
}