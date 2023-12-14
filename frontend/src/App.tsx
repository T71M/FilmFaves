import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import Routes from "./features/Routes";
import Api from "api";
import { store } from "./store";

export const api = new Api();

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </div>
  );
}

export default App;
