import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Breweries from "./pages/Breweries";
import SearchPage from "./pages/SearchPage";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/profile/:profileId">
        <Profile />
      </Route>
      <Route path="/breweries">
        <Breweries />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/brewery/:searchParam">
        <SearchPage />
      </Route>
      <Route path="*">
        <h1> 404 Page not found</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;