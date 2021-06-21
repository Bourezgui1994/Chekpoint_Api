import React from 'react'
import {Card} from 'react-bootstrap'



const PostCard = ({post}) => {
    return (
        <div> 
           
            <Card border="warning" style={{ width: '22rem', marginTop:'40px', padding:'8 30px'}} className="postCard">
                <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PostCard
