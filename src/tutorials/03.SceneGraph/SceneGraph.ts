import { Mesh, MeshPhongMaterial, Object3D, SphereGeometry } from "three";
import { OrbitControls } from "../../utils/threejs/OrbitControls";
import Template from "../01.template/Template";

class SceneGraph extends Template {
  private _solarSystem!: Object3D;
  private _earthOrbit!: Object3D;
  private _moonOrbit!: Object3D;

  update(time: number): void {
    const second = time * 0.001;

    this._solarSystem.rotation.y = second / 2;
    this._earthOrbit.rotation.y = second * 2;
    this._moonOrbit.rotation.y = second * 4;
  }

  constructor() {
    super();
    this._setupModel();
    this._setupControls();
  }
  _setupControls() {
    new OrbitControls(this._camera, this._container);
  }

  _setupModel() {
    const solarSystem = new Object3D();
    this._scene.add(solarSystem);

    const radius = 1;
    const widthSegments = 12;
    const heightSegments = 12;
    const sphereGeoMetry = new SphereGeometry(radius, widthSegments, heightSegments);

    const sunMaterial = new MeshPhongMaterial({
      emissive: 0xffff00,
      flatShading: true,
    });

    const sunMesh = new Mesh(sphereGeoMetry, sunMaterial);
    sunMesh.scale.set(3, 3, 3);
    solarSystem.add(sunMesh);

    const earthOrbit = new Object3D();
    solarSystem.add(earthOrbit);

    const earthMaterial = new MeshPhongMaterial({
      color: 0x2233ff,
      emissive: 0x112244,
      flatShading: true,
    });

    const earthMesh = new Mesh(sphereGeoMetry, earthMaterial);
    earthOrbit.position.x = 10;
    earthOrbit.add(earthMesh);

    const moonOrbit = new Object3D();
    moonOrbit.position.x = 2;
    earthOrbit.add(moonOrbit);

    const moonMaterial = new MeshPhongMaterial({
      color: 0x888888,
      emissive: 0x222222,
      flatShading: true,
    });

    const moonMesh = new Mesh(sphereGeoMetry, moonMaterial);
    moonMesh.scale.set(0.5, 0.5, 0.5);
    moonOrbit.add(moonMesh);

    this._solarSystem = solarSystem;
    this._earthOrbit = earthOrbit;
    this._moonOrbit = moonOrbit;
  }
}

export default SceneGraph;
