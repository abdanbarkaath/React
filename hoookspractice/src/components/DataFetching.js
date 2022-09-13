import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DataFetching() {
    const [users, setUsers] = useState([]);

    function getUsers() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response.data);
                setUsers(response.data)
            })
            .catch(e=>{
                console.log(e)
            })
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (

        <div>
            <button onClick={getUsers}>get users</button>
            <ul>
                {
                    users.map(user => {
                      return (<li key={user.id}>{user.name}</li>)
                    })
                }
            </ul>
        </div>
    )
}
