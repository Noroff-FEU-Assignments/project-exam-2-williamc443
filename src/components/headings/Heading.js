import React from "react";
import styles from "./Heading.module.css"

function Heading(props) {
    return <div>
        <h1 className={styles.h1}>{props.content}</h1>
    </div>
}

export default Heading;