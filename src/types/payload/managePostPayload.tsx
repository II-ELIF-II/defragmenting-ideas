import tagParams from "../tagParams";

interface managePostPayload {
  userId: string,
  id: string,
  title: string,
  thumbnail: string,
  summary: string,
  content: string,
  PostTag: Array<tagParams>,
}

export default managePostPayload