import GeoMetry from "./tutorials/02.geometry/GeoMetry";
import SceneGraph from "./tutorials/03.SceneGraph/SceneGraph";
import Material from "./tutorials/04.material/Material";
import CustomGeometry from "./tutorials/05.customGeometry/CustomGeometry";

class App {
  constructor() {
    // new SceneGraph();
    // new Material();
    new CustomGeometry();
  }
}

window.onload = () => {
  new App();
};
