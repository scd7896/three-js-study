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
    const shape = this._createHearthShape();
    const geometry = new THREE.ExtrudeBufferGeometry(shape, {
      steps: 4,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 1.6,
      bevelSize: 2,
      bevelSegments: 5,
    });

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

  // _setModel() {
  //   const shape = new THREE.Shape();

  //   const geometry = new THREE.BufferGeometry();
  //   const points = shape.getPoints();
  //   geometry.setFromPoints(points);

  //   const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
  //   const line = new THREE.Line(geometry, material);

  //   this._scene.add(line);
  // }

  // _setModel() {
  //   class CustomSinCurve extends THREE.Curve<THREE.Vector3> {
  //     scale: number;
  //     constructor(scale: number) {
  //       super();
  //       this.scale = scale;
  //     }
  //     getPoint(t: number) {
  //       const tx = t * 3 - 1.5;
  //       const ty = Math.sin(2 * Math.PI * t);
  //       const tz = 0;
  //       return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  //     }
  //   }

  //   const path = new CustomSinCurve(4);

  //   const geometry = new THREE.BufferGeometry();
  //   const points = path.getPoints(30); // 커브를 그리는데에 있어서 각을 몇개를 줄것인지
  //   geometry.setFromPoints(points);

  //   const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
  //   const line = new THREE.Line(geometry, material);

  //   this._scene.add(line);
  // }

  // _setModel() {
  //   const points = [];
  //   for (let i = 0; i < 10; i++) {
  //     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.8));
  //   }

  //   const geometry = new THREE.BufferGeometry();
  //   geometry.setFromPoints(points);

  //   const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
  //   const line = new THREE.Line(geometry, material);

  //   this._scene.add(line);
  // }

  _createHearthShape() {
    const x = -2.5,
      y = -5;
    const shape = new THREE.Shape();
    shape.moveTo(x + 2.5, y + 2.5);
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
    return shape;
  }
}

export default GeoMetry;
