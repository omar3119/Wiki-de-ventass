import { useState } from "react";

//React router dom
import { HashRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header/Header.jsx";

import Layout from "./components/Layout/Layout.jsx";
import CardComplete from "./components/CardComplete/CardComplete.jsx";

//Pages
import NotFound from "./pages/NotFound.jsx";
import PageWiki from "./pages/Wiki.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
//Context
import { ContextProvider } from "./context/context.jsx";

function App() {
  return (
    <HashRouter>
      <ContextProvider>
        <div className="app">
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wiki" element={<PageWiki />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <CardComplete />
        </div>
      </ContextProvider>
    </HashRouter>
  );
}

export default App;
