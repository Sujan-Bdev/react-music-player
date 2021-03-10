import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import SideBar from "layout/Sider";
import RouterApp from "router/index";
import TopHeader from "layout/TopHeader";

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <SideBar />
          <Layout>
          <TopHeader/>
            <RouterApp />
          </Layout>
        </Router>
      </Suspense>
    </Layout>
  );
};

export default App;
