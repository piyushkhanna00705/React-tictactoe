import { useState } from "react";
import styles from  './tic-tac-toe.module.css'

export default function Board() {
    return (
        <>
            <div className={styles.board_row}>
                <Square />
                <Square />
                <Square />
            </div>
            <div className={styles.board_row}>
                <Square />
                <Square />
                <Square />
            </div>
            <div className={styles.board_row}>
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}

function Square () {

    const [buttonValue, setButtonValue] = useState(null);

    function handleClick() {
        setButtonValue('X');
        console.log("Click event triggered!");
    }
    return <button className={styles.square} onClick={handleClick}>{buttonValue}</button>
}
