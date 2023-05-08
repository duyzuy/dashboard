import React from "react";
import { Header } from "antd/es/layout/layout";
const PageHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Header style={{ padding: "0 16px", background: "#f5f5f5" }}>
      <h1 className="page-header">{title}</h1>
    </Header>
  );
};
export default PageHeader;
