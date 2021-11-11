import { Router, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import Portfolio from "../components/Portfolio";
import Courses from "../components/Courses";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
const createHistory = require("history").createBrowserHistory;
const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <header>
      <Navigation />
    </header>
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/courses" component={Courses} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  </Router>
);

export default AppRouter;
