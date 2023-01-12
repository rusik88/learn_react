function Person({ id, firstName, lastName, img, email }) {
    return (
        <div>
            <img src={img} alt={firstName} />
            <h3>
                {firstName} {lastName}
            </h3>
            <div>{email}</div>
        </div>

    )
}

export default Person