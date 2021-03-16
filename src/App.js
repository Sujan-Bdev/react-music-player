import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, Spin } from "antd";
import SideBar from "layout/Sider";
import RouterApp from "router/index";
import TopHeader from "layout/TopHeader";
import Spinner from 'components/LoadingSpinner'


const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner/>}>
        <Router>
          <SideBar />
          <Layout className="main">
            <TopHeader />
            <RouterApp />
          </Layout>
        </Router>
      </Suspense>
    </Layout>
  );
};

export default App;
