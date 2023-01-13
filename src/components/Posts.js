import Post from "./Post";
import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState(null)
    const [errors, setErrors] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(res => {
                setPosts(res)
            }).catch((error) => setErrors(error.message))
            .finally(() => setIsLoading(false))
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