import { useState } from "react";
//Components
import Header from "./components/Header/Header.jsx";
import PageWiki from "./pages/Wiki.jsx";
import Layout from "./components/Layout/Layout.jsx";
import CardComplete from "./components/CardComplete/CardComplete.jsx";
//Context
import { ContextProvider } from "./context/context.jsx";

function App() {

  return (
    <ContextProvider>
      <div className="app">
        <Header />
        <Layout>
          <PageWiki />
        </Layout>
        <CardComplete />
      </div>
    </ContextProvider>
  );
}

export default App;
