import axios from 'axios'
import React , {useEffect, useState} from 'react'
import UserList from '../Components/UserList'

const Home = () => {
    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(true)

    const getUser =() => {
        axios.get("http://jsonplaceholder.typicode.com/users")
        .then(res =>{setUsers(res.data)
                     setLoad(false)})

        .catch(err =>console.log(err))
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <div>
            <UserList users={users} load={load}/>
        </div>
    )
}

export default Home
