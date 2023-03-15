import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { A } from "./pages/A";
import { B } from "./pages/B";
import { C } from "./pages/C";
import { Top } from "./pages/Top";

function App() {
  return (
    <BrowserRouter>
      <div className="artboard phone-1 bg-primary">
        <div className="btn-group">
          <Link className="btn" to="/">
            Top
          </Link>
          <Link className="btn btn-ghost" to="/a">
            A
          </Link>
          <Link className="btn btn-secondary" to="/b">
            B
          </Link>
          <Link className="btn btn-accent" to="/c">
            C
          </Link>
        </div>
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
    </BrowserRouter>
  );
}

export default App;
