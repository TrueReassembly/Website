import styles from './Box.module.css';

function Box(props) {
    return (
        <>
        <div className={styles.boxContainer}>
            {props.header && (
                <div className={styles.headerText}>
                    {props.header}
                </div>
            )}
            <div className={styles.boxContent}>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default Box;