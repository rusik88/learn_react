import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {firstSetCounter} from "../store/reducerFirst";
import {secondSetCounter} from "../store/reducerSecond";
import { fetchCustomersAction } from "../asyncActions/fetchCustomersAction";

function About() {
    const dispatch = useDispatch();
    //const counter = useSelector(state => state.first.counter)
    //const counter_second = useSelector(state => state.second.counter_second)

    const setCounterHandle = () => {
        dispatch(firstSetCounter())
    }
    const setCounterSecondHandle = () => {
        dispatch(secondSetCounter())
    }

    const getUsersHandle = () => {
        dispatch(fetchCustomersAction(dispatch))
    }

    return (
        <>
            <h1>About page</h1>
            <button onClick={setCounterHandle}>Set counter</button>
            <button onClick={setCounterSecondHandle}>Set counter Second</button>
            <button onClick={getUsersHandle}>Get users</button>
            <Link to="/">Got to Home</Link><br />
            <Link to="/contacts">Got to Contacts</Link>
        </>
    )
}

export default About