import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./components/Theme/Theme";
import ExploreScreen from "./screens/ExploreScreen";
import SectorScreen from "./screens/SectorScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Screen from "./screens/Screen";
import ConstructionStatusScreen from "./screens/ConstructionStatusScreen";
import MobilizationStatusScreen from "./screens/MobilizationStatusScreen";
import MilitaryStatusScreen from "./screens/MilitaryStatusScreen";
import KingdomStatusScreen from "./screens/KingdomStatusScreen";
import BuildingsScreen from "./screens/BuildingsScreen";
import ResearchScreen from "./screens/ResearchScreen";
import MilitaryScreen from "./screens/MilitaryScreen";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <div className="App">
          <CssBaseline />
          <Switch>
            <Route path="/sector">
              <Screen mainComponent={<SectorScreen />} />
            </Route>
            <Route path="/explore">
              <Screen mainComponent={<ExploreScreen />} />
            </Route>
            <Route path="/buildings">
              <Screen mainComponent={<BuildingsScreen />} />
            </Route>
            <Route path="/research">
              <Screen mainComponent={<ResearchScreen />} />
            </Route>
            <Route path="/military">
              <Screen mainComponent={<MilitaryScreen />} />
            </Route>
            <Route path="/constructionStatus">
              <Screen mainComponent={<ConstructionStatusScreen />} />
            </Route>
            <Route path="/mobilizationStatus">
              <Screen mainComponent={<MobilizationStatusScreen />} />
            </Route>
            <Route path="/militaryStatus">
              <Screen mainComponent={<MilitaryStatusScreen />} />
            </Route>
            <Route path="/">
              <Screen mainComponent={<KingdomStatusScreen />} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
