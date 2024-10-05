function MyCameraControls(camera, canvas) {
    const controls = new THREE.OrbitControls(camera, canvas);    

    this.update = function () {
        controls.update();
    }

    // limit the zooming
    controls.minDistance = 20;
    controls.maxDistance = 1500;
    controls.zoomSpeed = 1;
}
// export function clickChange(camera, canvas) {
//     const controls = new THREE.OrbitControls(camera, canvas);    

//     this.update = function () {
//         controls.update();
//     }

//     // limit the zooming
//     controls.minDistance = 20;
//     controls.maxDistance = 1000;
//     controls.zoomSpeed = 1;
// }