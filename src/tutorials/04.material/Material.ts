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
import { VertexNormalsHelper } from "../../utils/threejs/VertexNormalsHelper";

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
    const map = textureLoader.load("/public/images/glass/Glass_Window_002_basecolor.jpg");
    const mapAO = textureLoader.load("/public/images/glass/Glass_Window_002_ambientOcclusion.jpg");
    const mapHeight = textureLoader.load("/public/images/glass/Glass_Window_002_height.png");
    const mapNormal = textureLoader.load("/public/images/glass/Glass_Window_002_normal.jpg");
    const mapRoughness = textureLoader.load("/public/images/glass/Glass_Window_002_roughness.jpg");
    const mapMetalic = textureLoader.load("/public/images/glass/Glass_Window_002_metallic.jpg");
    const mapAlpha = textureLoader.load("/public/images/glass/Glass_Window_002_opacity.jpg");

    const material = new MeshStandardMaterial({
      map,
      normalMap: mapNormal,
      displacementMap: mapHeight,
      displacementScale: 0.2,
      displacementBias: -0.15,

      aoMap: mapAO,
      aoMapIntensity: 1,

      roughnessMap: mapRoughness,

      metalnessMap: mapMetalic,
      metalness: 0.5,

      alphaMap: mapAlpha,
      transparent: true,
      side: DoubleSide,
    });

    const box = new Mesh(new BoxGeometry(1, 1, 1, 256, 256, 256), material);
    box.position.set(-1, 0, 0);
    this._scene.add(box);
    box.geometry.attributes.uv2 = box.geometry.attributes.uv;

    // const boxHelper = new VertexNormalsHelper(box, 0.1, 0xffff00);
    // this._scene.add(boxHelper);

    const sphere = new Mesh(new SphereGeometry(0.7, 512, 512), material);
    sphere.position.set(1, 0, 0);
    sphere.geometry.attributes.uv2 = sphere.geometry.attributes.uv;
    this._scene.add(sphere);

    // const sphereHelper = new VertexNormalsHelper(sphere, 0.1, 0xffff00);
    // this._scene.add(sphereHelper);
  }
}

export default Material;
