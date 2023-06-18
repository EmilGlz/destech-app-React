import React from "react";
import "./StudentComment.css";

type CommentProps = {
  data: {
    fullName: string;
    image: string;
    jobTitle: string;
    description: string;
  };
};

const StudentComment: React.FC<CommentProps> = ({ data }) => {
  return (
    <div className="comment-panel">
      <img src={data.image}></img>

      <p className="graduate-name">{data.fullName}</p>
      <p className="graduate-job-title">{data.jobTitle}</p>
      <p className="graduate-description">{data.description}</p>
    </div>
  );
};

export default StudentComment;
