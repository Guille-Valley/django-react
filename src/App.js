//import React from 'react';

import { Provider } from "react-redux";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/Home";
import Blog from "./containers/Blog";
//import store from "./store";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    //<Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </Router>
   // </Provider>
  );
}

export default App;
