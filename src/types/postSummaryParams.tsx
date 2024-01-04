import postTagParams from "./postTagParams";

interface postSummaryParams {
  id: string;
  title: string;
  thumbnail: string;
  summary: string;
  createdAt: Date;
  updatedAt: Date;
  PostTag: Array<postTagParams>;
};

export default postSummaryParams;