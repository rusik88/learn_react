import courses from "../data/courses";
import {Link} from "react-router-dom";

function Courses() {
    return (
        <>
            <h1>Courses</h1>
            <nav>
                {courses.map(item => <div key={item.id}><Link to={'/courses/'+item.id.toString()}>{item.title}</Link></div> )}
            </nav>
        </>
    )
}

export default Courses