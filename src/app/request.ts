// import axios from "axios"

// export async function getFeaturedPost(type: number)
// {
//   try {
//     const {data, status} = await axios.get('http://localhost:3000/api/posts', {params: {
//       type: 0
//     }})
//     return data
//   } catch(error) {
//     console.error(error)
//   }
// }

// export async function getPosts(type: number, count?: number, page?: number) {
//   try {
//     const {data, status} = await axios.get('http://localhost:3000/api/posts', {params: {
//       type: type,
//       count: count,
//       page: page,
//     }})
//     return data
//   } catch(error) {
//     console.error(error)
//   }
// }

// export async function getPost(id: string)
// {
//   try {
//     const {data, status} = await axios.get('http://localhost:3000/api/posts', {params: {
//       type: 2,
//       id: id,
//     }})
//     return data
//   } catch(error) {
//     console.error(error)
//   }
// }