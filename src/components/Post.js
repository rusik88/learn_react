function Post({title, id, userId, body}) {
    return (
        <div className="post">
            <h1>{title}</h1>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>{body}</div>
        </div>
    )
}

export default Post