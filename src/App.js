import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import "./App.css";
import Home from "./pages/Home";
import ScrollToTop from "./helpers/scrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* <Particles options={particlesOptions} /> */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
