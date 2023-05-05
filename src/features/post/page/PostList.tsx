import React from "react";
import { Button } from "antd";
import { withAdminLayout } from "../../../Hocs/withAdminLayout";
import { useParams, useMatches } from "react-router";

const PostList: React.FC = () => {
  const { id: postId } = useParams();
  const matches = useMatches();
  console.log({ matches });
  return (
    <>
      <Button color="" type="primary">
        Tạo bài viết
      </Button>
      <div className="post list"></div>
    </>
  );
};
export default withAdminLayout(PostList, {
  title: "Bài viết",
});
