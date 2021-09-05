import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeRedux } from "./components/redux/home_redux";
import { HomeReduxToolkit } from "./components/redux_toolkit/home_redux_toolkit";

const App = () => (
  <Router>
    <Switch>
      <Route path="/toolkit"><HomeReduxToolkit/></Route>
      <Route path="/*"><HomeRedux/></Route>
    </Switch>
  </Router>
);

export default App;
