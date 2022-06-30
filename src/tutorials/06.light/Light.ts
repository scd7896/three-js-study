import {
  AmbientLight,
  CameraHelper,
  DirectionalLight,
  DirectionalLightHelper,
  DoubleSide,
  HemisphereLight,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  PointLight,
  PointLightHelper,
  SphereGeometry,
  SpotLight,
  SpotLightHelper,
  TorusGeometry,
  TorusKnotGeometry,
} from "three";
import { degToRad } from "three/src/math/MathUtils";
import { OrbitControls } from "../../utils/threejs/OrbitControls";
import Template from "../01.template/Template";

class Light extends Template {
  update(time: number) {
    time *= 0.001;
    const smallSpherePivot = this._scene.getObjectByName("smallSpherePivot");
    if (smallSpherePivot) {
      smallSpherePivot.rotation.y = degToRad(time * 50);
      if (this._light) {
        const smallSphere = smallSpherePivot.children[0];

        smallSphere.getWorldPosition(this._light.position);

        if (this._lightHelper) this._lightHelper.update();
      }
    }
  }

  _setupControls() {
    new OrbitControls(this._camera, this._container);
  }

  constructor() {
    super();
    this._setupModel();
    this._setupControls();
  }

  _setupModel() {
    const groundGeometry = new PlaneGeometry(10, 10);
    const groundMaterial = new MeshStandardMaterial({
      color: "#2c3e50",
      roughness: 0.5,
      metalness: 0.5,
      side: DoubleSide,
    });

    const ground = new Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = degToRad(-90);
    ground.receiveShadow = true;
    this._scene.add(ground);

    // const bigSphereGeoMetry = new SphereGeometry(1.5, 64, 64, 0, Math.PI);
    const bigSphereGeoMetry = new TorusKnotGeometry(1, 0.3, 128, 64, 2, 3);
    const bigSphereMaterial = new MeshStandardMaterial({
      color: "#ffffff",
      roughness: 0.1,
      metalness: 0.2,
    });
    const bigSphere = new Mesh(bigSphereGeoMetry, bigSphereMaterial);
    // bigSphere.rotation.x = degToRad(-90);
    bigSphere.position.y = 1.6;
    bigSphere.receiveShadow = true;
    bigSphere.castShadow = true;
    this._scene.add(bigSphere);

    const torusGeoMetry = new TorusGeometry(0.4, 0.1, 32, 32);
    const torusMaterial = new MeshStandardMaterial({
      color: "#9b59b6",
      roughness: 0.5,
      metalness: 0.9,
    });

    for (let i = 0; i < 8; i++) {
      const torusPivot = new Object3D();
      const torus = new Mesh(torusGeoMetry, torusMaterial);
      torusPivot.rotation.y = degToRad(45 * i);
      torus.position.set(3, 0.5, 0);
      torusPivot.add(torus);
      torus.receiveShadow = true;
      torus.castShadow = true;
      this._scene.add(torusPivot);
    }

    const smallSphereGeoMetry = new SphereGeometry(0.3, 32, 32);
    const smallSphereMaterial = new MeshStandardMaterial({
      color: "#e4743c",
      roughness: 0.2,
      metalness: 0.5,
    });
    const smallSpherePivot = new Object3D();
    const smallSphere = new Mesh(smallSphereGeoMetry, smallSphereMaterial);
    smallSphere.receiveShadow = true;
    smallSphere.castShadow = true;
    smallSpherePivot.add(smallSphere);
    smallSpherePivot.name = "smallSpherePivot";
    smallSphere.position.set(3, 0.5, 0);
    this._scene.add(smallSpherePivot);
  }

  _setupLight() {
    const auxLight = new DirectionalLight(0xffffff, 0.5);
    auxLight.position.set(0, 5, 0);
    auxLight.target.position.set(0, 0, 0);
    this._scene.add(auxLight.target);
    this._scene.add(auxLight);

    // const light = new DirectionalLight(0xffffff, 0.5);
    // light.position.set(0, 5, 0);
    // light.target.position.set(0, 0, 0);
    // this._scene.add(light.target);
    // light.shadow.camera.top = light.shadow.camera.right = 6;
    // light.shadow.camera.bottom = light.shadow.camera.left = -6;

    const light = new PointLight(0xffffff, 0.7);
    light.position.set(0, 5, 0);

    light.shadow.mapSize.width = light.shadow.mapSize.height = 2048;
    light.shadow.radius = 40;

    const cameraHelper = new CameraHelper(light.shadow.camera);
    this._scene.add(cameraHelper);

    this._scene.add(light);
    this._light = light;
    light.castShadow = true;
  }
}

export default Light;
