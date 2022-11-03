import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// redux
import { isStillLoading, retrievePokemons } from "../../slices/pokemon";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// components
import { AppContainer } from "./styled";
import { List } from "../List/List";
import { Detail } from "../Detail/Detail";
import { Confirm } from "../Confirm/Confirm";

export const App: React.FC = () => {
  const isLoading = useAppSelector(isStillLoading);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(retrievePokemons());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/pokemon/:name" component={Detail} />
          <Route exact path="/pokemon/:name/konfirmasi" component={Confirm} />
        </Switch>
      </AppContainer>
    </Router>
  );
};
