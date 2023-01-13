import './info.css'
import styles from './Info.module.css'

console.log(styles)

function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from the Info component</h1>
            <button className="myButton">Click me</button>
        </div>
    )
}

export default Info