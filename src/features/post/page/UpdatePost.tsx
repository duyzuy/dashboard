import React from "react";
import PageHeader from "../../../components/PageHeader";
import PageContent from "../../../components/PageContent";
const UpdatePost: React.FC = () => {
  return (
    <>
      <PageHeader title="Chỉnh sửa" />
      <PageContent>
        <div className="post list"></div>
      </PageContent>
    </>
  );
};
export default UpdatePost;
