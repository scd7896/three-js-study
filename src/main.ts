import GeoMetry from "./tutorials/02.geometry/GeoMetry";
import SceneGraph from "./tutorials/03.SceneGraph/SceneGraph";
import Material from "./tutorials/04.material/Material";

class App {
  constructor() {
    // new SceneGraph();
    new Material();
  }
}

window.onload = () => {
  new App();
};
