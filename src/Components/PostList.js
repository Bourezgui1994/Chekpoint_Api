import React from 'react'
import {Spinner } from 'react-bootstrap'
import PostCard from './PostCard'

const PostList = ({posts,loading}) => {
    return (
      <div> 
       <h1 style={{marginTop:'80px' , }}> POST LIST</h1>
       <hr style={{width:'200px', margin:'auto', height:'5px', color:'orange'}}/>
        <div className="postList">
       
        
        {loading ? <Spinner animation="border"/> : (
          posts.map((el, key) => <PostCard  key={el.id} post={el}/>)  
        )}

        </div>
        </div>
    )
}

export default PostList
