import React from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";
import { Ads } from "../ui";

function MainRoot() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Ads />
      <Footer />
    </div>
  );
}

export default MainRoot;
