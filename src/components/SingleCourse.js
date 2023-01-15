import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import courses from "../data/courses";
import {useEffect} from "react";

function SingleCourse() {
    const {slug} = useParams()
    const course = courses.find((item) => item.id === slug)
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location)

    useEffect(() => {
        if(course === undefined) {
            navigate('..', {relative: 'path'})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [course])

    return (
        <>
            <h1>Course Single</h1>
            {course !== undefined
                ? <>
                    <h2>{course.title}</h2>
                    <h3>{course.slug}</h3>
                    <h2>{course.id}</h2>
                    <Link to=".." relative="path">All Courses</Link>
                </>
                : <><h2>Course with id {slug} not found</h2></>}
        </>
    )
}

export default SingleCourse