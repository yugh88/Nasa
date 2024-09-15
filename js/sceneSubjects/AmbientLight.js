function AmbientLight(scene) {
    const color = 0xff0000;
    const intensity = 0.08;

    const ambientLight = new THREE.AmbientLight(color, intensity);
    scene.add(ambientLight);

    this.update = function () {
        // do something
    }

    //gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
    //gui.add(light, 'intensity', 0.1, 2, 0.01);
}