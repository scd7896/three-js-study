import * as THREE from "three";
import { OrbitControls } from "../../utils/threejs/OrbitControls";
import Template from "../01.template/Template";

class GeoMetry extends Template {
  private _cube: THREE.Group;
  update(time: number): void {
    time *= 0.001;

    // this._cube.rotation.x = time;
    // this._cube.rotation.y = time;
  }

  constructor() {
    super();
    this._setModel();
    this._setupControls();
  }

  _setupControls() {
    new OrbitControls(this._camera, this._container);
  }

  _setModel() {
    const geometry = new THREE.SphereGeometry(0.3, 0.8, 32);
    const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
    const cube = new THREE.Mesh(geometry, fillMaterial);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

    const group = new THREE.Group();
    group.add(cube);
    group.add(line);
    this._scene.add(group);

    this._cube = group;
  }
}

export default GeoMetry;
