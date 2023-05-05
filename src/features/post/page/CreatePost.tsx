import React from "react";
import { withAdminLayout } from "../../../Hocs/withAdminLayout";
const CreatePost: React.FC<{ title?: string }> = ({ title }) => {
  return <>Create a post</>;
};
export default withAdminLayout(CreatePost, {
  title: "Tạo bài viết",
});
