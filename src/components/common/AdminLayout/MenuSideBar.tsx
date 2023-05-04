import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];



const MENU_ITEMS = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <PieChartOutlined />,
    onClick: () => window.location.
  }
]
const MenuSideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={[MENU_ITEMS]}
      />
    </Sider>
  );
};

export default MenuSideBar;
