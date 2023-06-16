import React from "react";
import "./LearningTopic.css";
type TopicProps = {
  data: {
    title?: string;
    description: string;
  };
};
const LearningTopic: React.FC<TopicProps> = ({ data }) => {
  return (
    <div className="topic-container">
      {data.title && <p className="title">{data.title}</p>}
      <p>{data.description}</p>
    </div>
  );
};
export default LearningTopic;
