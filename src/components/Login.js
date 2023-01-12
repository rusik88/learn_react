import {useState} from "react";

function Login() {
    const handleOnSubmit = (event) => {
        event.preventDefault()

        console.log(data)
    }

    const [data, setData] = useState({username: '', password: ''})

    const handleForm = (e, name) => {
        setData({...data, [name]: e.target.value})
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleOnSubmit}>
                <label>Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => handleForm(e, 'username')}
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => handleForm(e, 'username')}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login