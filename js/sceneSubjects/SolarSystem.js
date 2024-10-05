function SolarSystem(scene, time) {
    const loader = new THREE.TextureLoader();

    var astrionomicalBodies = [];

    const solarSystem = new THREE.Group();
    scene.add(solarSystem);
    var sunMesh = createSun("sun", 60, scene, solarSystem, astrionomicalBodies, loader);


    var mercuryOrbit = createOrbit(solarSystem);
    var mercuryMesh = createPlanet("mercury", 6, 100, scene, mercuryOrbit, astrionomicalBodies, loader);
    createOrbitLine(100, scene, astrionomicalBodies);
    createOrbitLine2(100, scene, astrionomicalBodies);

    var venusOrbit = createOrbit(solarSystem);
    var venusMesh = createPlanet("venus", 10, 180, scene, venusOrbit, astrionomicalBodies, loader);
    createOrbitLine(180, scene, astrionomicalBodies);
    createOrbitLine2(180, scene, astrionomicalBodies);


    var earthOrbit = createOrbit(solarSystem);
    var earthMesh = createPlanet("earth", 15, 280, scene, earthOrbit, astrionomicalBodies, loader);
    createOrbitLine(280, scene, astrionomicalBodies);
    createOrbitLine2(280, scene, astrionomicalBodies);

    var moonOrbit = createMoonOrbit(280, earthOrbit);
    var moonMesh = createPlanet("moon", 4, 25, scene, moonOrbit, astrionomicalBodies, loader);
    createOrbitLine(25, moonOrbit, astrionomicalBodies);

    var marsOrbit = createOrbit(solarSystem);
    var marsMesh = createPlanet("mars", 12, 360, scene, marsOrbit, astrionomicalBodies, loader);
    createOrbitLine(360, scene, astrionomicalBodies);
    createOrbitLine2(360, scene, astrionomicalBodies);

    var jupiterOrbit = createOrbit(solarSystem);
    var jupiterMesh = createPlanet("jupiter", 34, 450, scene, jupiterOrbit, astrionomicalBodies, loader);
    createOrbitLine(450, scene, astrionomicalBodies);
    createOrbitLine2(450, scene, astrionomicalBodies);

    var saturnOrbit = createOrbit(solarSystem);
    var saturnMesh = createPlanet("saturn", 27, 580, scene, saturnOrbit, astrionomicalBodies, loader);
    createOrbitLine(580, scene, astrionomicalBodies);
    createOrbitLine2(580, scene, astrionomicalBodies);

    // Saturns ring
    const innerRadius = 36;
    const outerRadius = 40;
    const thetaSegments = 65;
    const saturnBelt = new THREE.RingBufferGeometry(
        innerRadius, outerRadius, thetaSegments);
    const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(saturnBelt, material);
    mesh.rotation.set(5,0,0);

    mesh.position.set(580, 0, 0);
    saturnOrbit.add(mesh);


    var uranusOrbit = createOrbit(solarSystem);
    var uranusMesh = createPlanet("uranus", 18, 700, scene, uranusOrbit, astrionomicalBodies, loader);
    createOrbitLine(700, scene, astrionomicalBodies);
    createOrbitLine2(700, scene, astrionomicalBodies);

    var neptuneOrbit = createOrbit(solarSystem);
    var neptuneMesh = createPlanet("neptune", 12, 900, scene, neptuneOrbit, astrionomicalBodies, loader);
    createOrbitLine(900, scene, astrionomicalBodies);
    createOrbitLine2(900, scene, astrionomicalBodies);


    this.update = function (time) {
        // rotate the planets
        sunMesh.rotation.y = time * 0.1;

        mercuryOrbit.rotation.y = time * 1.61/5; // rotate around the sun
        mercuryMesh.rotation.y = time * 0.1; // rotate the planet

        venusOrbit.rotation.y = time * 1.18/5;
        venusMesh.rotation.y = time * 0.1;

        earthOrbit.rotation.y = time * 1/5;
        earthMesh.rotation.y = time * 0.1;

        moonOrbit.rotation.y = time * 0.04;
        moonMesh.rotation.y = time * 0.1;

        marsOrbit.rotation.y = time * 0.81/5;
        marsMesh.rotation.y = time * 0.1;

        jupiterOrbit.rotation.y = time * 0.44/5;
        jupiterMesh.rotation.y = time * 0.1;

        saturnOrbit.rotation.y = time * 0.33/5;
        saturnMesh.rotation.y = time * 0.1;

        uranusOrbit.rotation.y = time * 0.23/5;
        uranusMesh.rotation.y = time * 0.1;

        neptuneOrbit.rotation.y = time * 0.18/5;
        neptuneMesh.rotation.y = time * 0.1;
    }

    this.getAstrionomicalBodies = function () {
        return astrionomicalBodies;
    }
}

function createOrbit() {
    const orbit = new THREE.Group();

    for (let i = 0, j = arguments.length; i < j; i++) {
        arguments[i].add(orbit);
    }

    return orbit;
}

function createMoonOrbit(distanceX) {
    const orbit = new THREE.Group();
    orbit.position.x = distanceX;

    for (let i = 0, j = arguments.length; i < j; i++) {
        if (i == 0) continue;
        arguments[i].add(orbit);
    }

    return orbit;
}

function createPlanet(name, size, distanceX, scene, orbit, astrionomicalBodies, loader) {
    var geometry = new THREE.SphereGeometry(size, 32, 16);

    let texturePath = "assets/textures/" + name + ".jpg";

    //without callback
    var texture = loader.load(texturePath);

    var material = new THREE.MeshPhongMaterial({ map: texture });
    var planetMesh = new THREE.Mesh(geometry, material);

    planetMesh.position.set(distanceX, 0, 0);


    orbit.add(planetMesh);
    astrionomicalBodies.push(planetMesh);

    return planetMesh;
}

function createSun(name, size, scene, orbit, astrionomicalBodies, loader) {
    var geometry = new THREE.SphereGeometry(size, 32, 16);

    let texturePath = "assets/textures/" + name + ".jpg";

    //without callback
    var texture = loader.load(texturePath);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    var sunMesh = new THREE.Mesh(geometry, material);

    orbit.add(sunMesh);
    astrionomicalBodies.push(sunMesh);

    return sunMesh;
}

function createOrbitLine(distanceX, scene, astrionomicalBodies) {
    const innerRadius = distanceX - 1;
    const outerRadius = distanceX + 1;
    const thetaSegments = 80;
    const geometry = new THREE.RingBufferGeometry(innerRadius, outerRadius, thetaSegments);
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        opacity: 0.05,
        transparent: true,
        side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = Math.PI / 2;

    //astrionomicalBodies.push(mesh);
    scene.add(mesh);
}
function createOrbitLine2(distanceX, scene, astrionomicalBodies) {
    const innerRadius = distanceX - 1;
    const outerRadius = distanceX + 1;
    const thetaSegments = 80;
    const geometry = new THREE.RingBufferGeometry(innerRadius, outerRadius, thetaSegments);
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        opacity: 0.1,
        transparent: true,
        side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = Math.PI / 2;

    //astrionomicalBodies.push(mesh);
    scene.add(mesh);
}