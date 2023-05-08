import React from "react";
import Button from "../../../components/Button";
import { useParams } from "react-router";
import PageHeader from "../../../components/PageHeader";
import PageContent from "../../../components/PageContent";
import { PlusOutlined } from "@ant-design/icons";
const PostList: React.FC = () => {
  const { id: postId } = useParams();

  return (
    <>
      <PageHeader title="Bài viết" />
      <div className="page-actions" style={{ padding: "6px 16px" }}>
        <Button type="primary" size="middle" icon={<PlusOutlined />}>
          Thêm bài mới
        </Button>
      </div>
      <PageContent>
        <div className="post list"></div>
      </PageContent>
    </>
  );
};
export default PostList;
