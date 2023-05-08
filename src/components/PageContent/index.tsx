import React from "react";
import { Content } from "antd/es/layout/layout";
const PageContent: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Content style={{ margin: "0 16px" }} className="page-body">
      <div
        style={{
          padding: 24,
          minHeight: 360,
          backgroundColor: "#fff",
        }}
      >
        {children}
      </div>
    </Content>
  );
};
export default PageContent;
