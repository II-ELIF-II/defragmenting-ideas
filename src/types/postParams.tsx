import tagParams from "./tagParams";

interface postParams {
  id: string,
  title: string,
  thumbnail: string,
  summary: string,
  content: string,
  createdAt: Date,
  updatedAt: Date,
  PostTag: Array<tagParams>,
}

export default postParams