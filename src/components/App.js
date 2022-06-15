import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Badges from "../pages/Badges";
import BadgesNew from "../pages/BadgeNew";
import BadgesEdit from "../pages/BadgeEdit";
import BadgesDetailsContainer from "../pages/BadgesDetailsContainer";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgesEdit} />
          <Route
            exact
            path="/badges/:badgeId/"
            component={BadgesDetailsContainer}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
