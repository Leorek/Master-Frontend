import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";

export const App = () => {
  const [organization, setOrganization] = useState("lemoncode");
  const [organizationPage, setOrganizationPage] = useState(1);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/list">
          <ListPage
            organization={organization}
            updateOrganization={setOrganization}
            organizationPage={organizationPage}
            updateOrganizationPage={setOrganizationPage}
          />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
};
