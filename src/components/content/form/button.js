import React from 'react';
import styles from "./Button.module.css";

function Button(props) {
    return (<div className={styles.div}>
        <button className={styles.button}></button>
        </div>
    );
}

export default Button;