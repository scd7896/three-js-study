import Template from "../01.template/Template";
import {
  BackSide,
  BoxGeometry,
  BufferGeometry,
  ClampToEdgeWrapping,
  DoubleSide,
  Float32BufferAttribute,
  FrontSide,
  Line,
  LinearFilter,
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
  MirroredRepeatWrapping,
  NearestMipmapLinearFilter,
  Points,
  PointsMaterial,
  RepeatWrapping,
  SphereGeometry,
  TextureLoader,
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
    const textureLoader = new TextureLoader();

    const map = textureLoader.load("/public/textureTest.png", (texture) => {
      texture.repeat.x = 1;
      texture.repeat.y = 1;

      texture.wrapS = ClampToEdgeWrapping;
      texture.wrapT = ClampToEdgeWrapping;

      texture.offset.x = 0;
      texture.offset.y = 0;

      texture.magFilter = LinearFilter;
      texture.minFilter = NearestMipmapLinearFilter;
    });

    const material = new MeshStandardMaterial({ map });

    const box = new Mesh(new BoxGeometry(1, 1, 1), material);
    box.position.set(-1, 0, 0);
    this._scene.add(box);

    const sphere = new Mesh(new SphereGeometry(0.7, 4, 4), material);
    sphere.position.set(1, 0, 0);
    this._scene.add(sphere);
  }
}

export default Material;
