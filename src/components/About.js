import {Link} from "react-router-dom";

function About() {
    return (
        <>
            <h1>About page</h1>
            <Link to="/">Got to Home</Link><br />
            <Link to="/contacts">Got to Contacts</Link>
        </>
    )
}

export default About