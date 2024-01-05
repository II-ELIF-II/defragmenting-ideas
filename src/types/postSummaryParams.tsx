import postTagParams from "./postTagParams";

interface postSummaryParams {
  id: string;
  title: string;
  thumbnail: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
  PostTag: Array<postTagParams>;
};

export default postSummaryParams;