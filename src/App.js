import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { HomeRedux } from "./components/redux/home_redux";
import { toolkitStore } from "./store/redux_toolkit/store";
import { HomeReduxToolkit } from "./components/redux_toolkit/home_redux_toolkit";

const App = () => (
  <Router>
    <Switch>
      <Provider store={toolkitStore}>
        <Route path="/toolkit"><HomeReduxToolkit/></Route>
      </Provider>
      <Provider store={toolkitStore}>
        <Route path="/*"><HomeRedux/></Route>
      </Provider>
    </Switch>
  </Router>
);

export default App;
