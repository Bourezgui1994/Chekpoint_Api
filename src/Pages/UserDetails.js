import axios from 'axios'
import React, {useState , useEffect} from 'react'
import User from '../Components/User/User'
import PostList from '../Components/PostList'

const UserDetails = (props) => {
    const {id} = props.match.params
    const [user, setUser] = useState({})
    const [posts, setPosts] =useState([])
    const [loading, setLoading] = useState(true)
    const getUser = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then (res =>{setUser(res.data)
                 setLoading(false)})
        .catch (err => console.log(err))
    }

    useEffect(() => {
        getUser();
        getPosts();
    }, [])

    const getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(res => {setPosts(res.data)
                 setLoading(false)})
        .catch(err => console.log(err))
    }
    return (
        <div>
            <User user={user} loading={loading}/>
            <PostList posts={posts} loading={loading}/>
        </div>
    )
}

export default UserDetails

