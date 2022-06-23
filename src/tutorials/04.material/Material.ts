import Template from "../01.template/Template";
import {
  BackSide,
  BoxGeometry,
  BufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  FrontSide,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  LineLoop,
  LineSegments,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Points,
  PointsMaterial,
  SphereGeometry,
} from "three";
import { OrbitControls } from "../../utils/threejs/OrbitControls";

class Material extends Template {
  update(time: number): void {}
  constructor() {
    super();
    this._setupModel();
    this._setupControls();
  }
  _setupControls() {
    new OrbitControls(this._camera, this._container);
  }

  _setupModel() {
    const material = new MeshPhysicalMaterial({
      color: 0xff0000,
      emissive: 0x000000,
      roughness: 1,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
    });

    const box = new Mesh(new BoxGeometry(1, 1, 1), material);
    box.position.set(-1, 0, 0);
    this._scene.add(box);

    const sphere = new Mesh(new SphereGeometry(0.7, 4, 4), material);
    sphere.position.set(1, 0, 0);
    this._scene.add(sphere);
  }
}

export default Material;
