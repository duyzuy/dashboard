import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { IconCmsBrand } from "../../../assets/icons";
import { MENU_ITEMS } from "../../../constants/menu";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const getItem = ({
  label,
  key,
  icon,
  children,
  onClick,
}: {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
}): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  } satisfies MenuItem;
};

const MenuSideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const items: MenuItem[] = MENU_ITEMS.map((item) =>
    getItem({
      label: item.label,
      key: item.id,
      icon: <item.icon />,
      onClick: () => navigate(item.path),
    })
  );

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="dashboard-logo">
        <img src={IconCmsBrand} alt="Brand Logo" />
      </div>
      <div className="ant-menu-item profile-item">
        <div className="inner-item">
          <UserOutlined />
          <div className="user-content">
            <p className="user-name">Nguyen van a</p>
            <p className="user-email">nguyenvana@gmail.com</p>
          </div>
        </div>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["post"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default MenuSideBar;
