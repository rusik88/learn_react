import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function About() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    console.log('counter in About page', counter)

    const setCounterHandle = () => {
        dispatch({type: 'SET_COUNTER'})
    }

    return (
        <>
            <h1>About page</h1>
            <button onClick={setCounterHandle}>Set counter</button>
            <Link to="/">Got to Home</Link><br />
            <Link to="/contacts">Got to Contacts</Link>
        </>
    )
}

export default About