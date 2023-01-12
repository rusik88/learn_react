import Person from "./Person";

function Persons({ persons }) {
    return (
        <div>
            {
                persons.map((index) => {
                    return <Person {...index} key={index.id} />
                })
            }
        </div>
    )
}

export default Persons