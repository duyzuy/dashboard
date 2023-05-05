import React from "react";
import { Layout } from "antd";

import { Outlet } from "react-router";
import MenuSideBar from "./MenuSideBar";
import { ConfigProvider } from "antd";

const AdminLayout: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F44336",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <MenuSideBar />
        <Layout className="site-layout">
          <Outlet />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AdminLayout;
