function PetInfo(props) {
    const { animal, hasPet } = props
    const text = hasPet ? `This ${ animal } is 3 years ago` : `I don't have animals`
    return (
        <h1>{ text }</h1>
    )
}

export default PetInfo