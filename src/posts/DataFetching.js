import React, { useState, useEffect} from "react";
import axios from 'axios'


function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://hn.algolia.com/api/v1/search?query=')
            .then(res => {
                console.log(res)
                setPosts(res.data.hits)
            })
        .catch(err => {
            console.log(err)
    })

    }, [])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key ={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching