import React from "react";
import { Layout } from "antd";
export const withAdminLayout = (
  component: React.FC,
  { title }: { title: string }
) => {
  const Component = component;
  const { Header, Content } = Layout;

  return (props: any) => (
    <>
      <Header style={{ padding: "0 16px", background: "#f5f5f5" }}>
        <h1 className="page-header"> {title}</h1>
      </Header>
      <Content style={{ margin: "0 16px" }} className="page-body">
        <div
          style={{
            padding: 24,
            minHeight: 360,
            backgroundColor: "#fff",
          }}
        >
          <Component {...props} />
        </div>
      </Content>
    </>
  );
};
