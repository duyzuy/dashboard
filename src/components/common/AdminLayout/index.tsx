import React, { useState } from "react";
import { Layout, theme } from "antd";

import { Outlet } from "react-router";
import MenuSideBar from "./MenuSideBar";
import { ConfigProvider } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(theme.useToken());
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
          <Header style={{ padding: "0 16px", background: colorBgContainer }}>
            <h1 className="page-header">Dashboard</h1>
          </Header>
          <Content style={{ margin: "0 16px" }} className="page-body">
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AdminLayout;
