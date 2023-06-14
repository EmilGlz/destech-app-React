import React from "react";
import "./LearningTopic.css";
type TopicProps = {
  data: string;
};
const LearningTopic: React.FC<TopicProps> = ({ data }) => {
  return <div className="topic-container">{data}</div>;
};
export default LearningTopic;
