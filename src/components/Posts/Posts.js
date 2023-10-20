import React from 'react'
import './Posts.css'
import { PostsData } from "../../../public/Data/PostsData"
// import Post from '../Post/Post'
import Pust from '../Pust/Pust'
const Posts = () => {
  return (
    <div className="Posts">
        {PostsData.map((post, id)=>{
            return <Pust data={post} key={id}/>
        })}
    </div>
  )
}

export default Posts