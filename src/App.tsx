import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { A } from "./pages/A";
import { B } from "./pages/B";
import { C } from "./pages/C";
import { Top } from "./pages/Top";

function App() {
  return (
    <BrowserRouter>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <Switch>
              <Route path="/a">
                <A />
              </Route>
              <Route path="/b">
                <B />
              </Route>
              <Route path="/c">
                <C />
              </Route>
              <Route path="/">
                <Top />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <div className="btm-nav">
        <Link to="/">Top</Link>
        <Link to="/a">A</Link>
        <Link to="/b">B</Link>
        <Link to="/c">C</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
