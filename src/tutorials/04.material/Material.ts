import Template from "../01.template/Template";
import { BufferGeometry, Float32BufferAttribute, MathUtils, Points, PointsMaterial } from "three";
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
    const vertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = MathUtils.randFloatSpread(100);
      const y = MathUtils.randFloatSpread(100);
      const z = MathUtils.randFloatSpread(100);

      vertices.push(x, y, z);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));

    const material = new PointsMaterial({
      color: 0xff0000,
      size: 1,
      sizeAttenuation: true,
    });

    const points = new Points(geometry, material);
    this._scene.add(points);
  }
}

export default Material;
