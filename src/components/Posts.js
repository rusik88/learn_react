import Post from "./Post";
import { useEffect, useState } from "react";

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
    const [posts, setPosts] = useState(null)
    const [errors, setErrors] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const posts_resp = await fetch(API_URL)
                const posts = await posts_resp.json()
                setPosts(posts)
            } catch(error) {
                setErrors(error.message)
            }

            setIsLoading(false)
        }
        fetchData()

    }, [])

    if(errors !== null) {
        return (
            <div>{errors}</div>
        )
    }

    return (<>
        {posts !== null
            ? (
                <>
                    <h1>Posts</h1>
                    <hr />
                    { !isLoading
                        ? posts.map(item => {
                            return (<Post {...item} key={item.id} />)
                        }) :
                        (<div>Loading...</div>)
                    }
                </>)
            : ("")
        }
    </>)

}

export default Posts