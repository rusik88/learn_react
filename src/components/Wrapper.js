function Wrapper({children, color}) {
    const style = {backgroundColor: color}
    return (
        <div style={style}>
            <h1>Hello from wrapper</h1>
            {children}
        </div>
    )
}

export default Wrapper;