import GeoMetry from "./tutorials/02.geometry/GeoMetry";
import SceneGraph from "./tutorials/03.SceneGraph/SceneGraph";

class App {
  constructor() {
    new SceneGraph();
  }
}

window.onload = () => {
  new App();
};
