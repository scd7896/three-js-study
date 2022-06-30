import { BufferAttribute, BufferGeometry, Mesh, MeshPhongMaterial } from "three";
import { OrbitControls } from "../../utils/threejs/OrbitControls";
import { VertexNormalsHelper } from "../../utils/threejs/VertexNormalsHelper";
import Template from "../01.template/Template";

class CustomGeometry extends Template {
  update(time: number): void {}
  constructor() {
    super();
    this._setupModel();
    this._setupControls();
  }

  _setupModel() {
    const rawPositions = [-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0];

    const rawNormals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];

    const rawColors = [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0];

    const rawUVs = [0, 0, 1, 0, 0, 1, 1, 1];

    const positions = new Float32Array(rawPositions);
    const normals = new Float32Array(rawNormals);
    const colors = new Float32Array(rawColors);
    const uvs = new Float32Array(rawUVs);

    const geometry = new BufferGeometry();

    geometry.setAttribute("position", new BufferAttribute(positions, 3));
    geometry.setAttribute("normal", new BufferAttribute(normals, 3));
    geometry.setAttribute("color", new BufferAttribute(colors, 3));
    geometry.setAttribute("uv", new BufferAttribute(uvs, 2));

    geometry.setIndex([0, 1, 2, 2, 1, 3]);

    const material = new MeshPhongMaterial({ color: 0xffffff, vertexColors: true });

    const box = new Mesh(geometry, material);
    this._scene.add(box);

    const boxHelper = new VertexNormalsHelper(box, 0.1, 0xffff00);
    this._scene.add(boxHelper);
  }
  _setupControls() {
    new OrbitControls(this._camera, this._container);
  }
}

export default CustomGeometry;
