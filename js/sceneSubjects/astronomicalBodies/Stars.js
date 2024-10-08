function Stars(scene) {
    var vertices = [];


    var numPoints = 2200;
    for (var i = 0; i < numPoints; i++) {
        var x = THREE.MathUtils.randFloatSpread(2500);
        var y = THREE.MathUtils.randFloatSpread(1000);
        var z = THREE.MathUtils.randFloatSpread(2500);

        vertices.push(x, y, z);
    }
    
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    var material = new THREE.PointsMaterial({
        color: 0x808080,
        sizeAttenuation: false,
        size: 2,
        opacity: 0.5,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    });

    var points = new THREE.Points(geometry, material);
    scene.add(points);

    this.update = function () {
        // do something
    }
}