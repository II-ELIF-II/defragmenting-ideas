import adminPanelPostParams from "./adminPanelPostParams";

interface adminPanelPostsParams {
  page: number,
  pages: number,
  posts: adminPanelPostParams[],
}

export default adminPanelPostsParams;