import * as THREE from "three";

abstract class Template {
  protected _scene: THREE.Scene;
  protected _camera: THREE.PerspectiveCamera;

  private _renderer: THREE.WebGLRenderer;

  protected _container: HTMLDivElement;

  constructor() {
    const appContainer = document.querySelector("#app");
    this._container = appContainer as HTMLDivElement;

    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    appContainer?.appendChild(renderer.domElement);
    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._setupCamera();
    this._setupLight();

    window.onresize = this.resize.bind(this);
    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  private _setupCamera() {
    const width = this._container.clientWidth;
    const height = this._container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.z = 2;
    this._camera = camera;
  }

  private _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    this._scene.add(light);
  }

  resize() {
    const width = this._container.clientWidth;
    const height = this._container.clientHeight;

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);
  }

  render(time: number) {
    this._renderer.render(this._scene, this._camera);
    this.update(time);
    requestAnimationFrame(this.render.bind(this));
  }

  abstract update(time: number): void;
}

export default Template;
