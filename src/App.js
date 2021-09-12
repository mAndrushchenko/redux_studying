import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store/redux/store";
import { HomeRedux } from "./components/redux/home_redux";
import { HomeReduxToolkit } from "./components/redux_toolkit/home_redux_toolkit";

const App = () => (
  <Router>
    <Switch>
      <Route path="/toolkit"><HomeReduxToolkit/></Route>
      <Route path="/*">
        <Provider store={store}>
          <HomeRedux/>
        </Provider>
      </Route>
    </Switch>
  </Router>
);

export default App;
