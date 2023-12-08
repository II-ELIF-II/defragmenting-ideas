// "use client"

// import BackgroundComp from "@/components/MiscComps/BackgroundComp"
// import PostData from "@/types/PostData"
// import TagData from "@/types/TagData"
// import axios from "axios"
// import { ChangeEvent, FormEvent, useState } from "react"
// import ReactTextareaAutosize from "react-textarea-autosize"

// const apiPath = "api/access"

// const Admin = () => {
//   const inputClass = "p-1 bg-neutral-900 w-full break-words"
//   const inputDivClass = "p-2 w-full bg-neutral-800"

//   const [formData, setFormData] = useState<PostData>({
//     type: 0,
//     title: '',
//     thumbnail: '',
//     summary: '',
//     content: '',
//     password: '',
//   })

//   const handlePostChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     e.preventDefault()
//     const {name, value} = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handlePostSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     try {
//       const response = await axios.post(apiPath, {formData})
//     } catch(error) {
//       console.error(error)
//     }
//   }

//   const [tagData, setTagData] = useState<TagData>({
//     type: 1,
//     name: '',
//     password: '',
//   })

//   const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault()
//     const {name, value} = e.target
//     setTagData({
//       ...tagData,
//       [name]: value,
//     })
//   }

//   const handleTagSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     try {
//       const response = await axios.post(apiPath, tagData)
//     } catch(error) {
//       console.error(error)
//     }
//   }

//   return (
//     <>
//       <div className="flex w-screen min-h-screen">

//         <div className="flex w-full z-10">
//           <div className="flex flex-col w-full">
//             <form className="flex flex-col w-full" onSubmit={handlePostSubmit}>
//               <div className={inputDivClass}>
//                 <input name="title" type="text" placeholder="Title" className={inputClass} value={formData.title} maxLength={81} onChange={handlePostChange}/>
//               </div>
//               <div className={inputDivClass}>
//                 <input name="thumbnail" type="text" placeholder="Thumbnail" className={inputClass} value={formData.thumbnail} maxLength={255} onChange={handlePostChange}/>
//               </div>
//               <div className={inputDivClass}>
//                 <input name="summary" type="text" placeholder="Summary" className={inputClass} value={formData.summary} maxLength={255} onChange={handlePostChange}/>
//               </div>
//               <div className={inputDivClass}>
//                 <ReactTextareaAutosize minRows={5} name="content" placeholder="Content" className={inputClass} value={formData.content} maxLength={2000} onChange={handlePostChange}/>
//               </div>
//               <div className={inputDivClass}>
//                 <input name="password" type="password" placeholder="Password" className={inputClass} value={formData.password} onChange={handlePostChange}/>
//               </div>
//               <p className={inputDivClass}>Tags:</p>
//               <div className={inputDivClass}>
//                 <input name="sampleTag" id="sampleTag" type="checkbox"/>
//                 <label htmlFor="sampleTag">sample tag</label>
//               </div>
//               <div className={inputDivClass}>
//                 <input name="submit" type="submit" className={inputClass} value="Submit"/>
//               </div>
//             </form>

//             <form className="flex flex-col w-full" onSubmit={handleTagSubmit}>
//               <div className={inputDivClass}>
//                 <input name="name" type="text" placeholder="Tag" className={inputClass} value={tagData.name} onChange={handleTagChange}/>
//               </div>
//               <div className={inputDivClass}>
//                 <input name="password" type="password" placeholder="Password" className={inputClass} value={tagData.password} onChange={handleTagChange}/>
//               </div>
//               <div className={inputDivClass}>
//                 <input name="submit" type="submit" className={inputClass} value="Submit"/>
//               </div>
//             </form>
//           </div>
//           <div className="flex flex-col w-full">PREVIEW:</div>
//         </div>

//         <BackgroundComp bgURL = {"https://i.imgur.com/yMPmdyO.jpg"}/>
//       </div>
//     </>
//   )
// }

// export default Admin

const Admin = () => {
  return (
    <></>
  )
}
export default Admin