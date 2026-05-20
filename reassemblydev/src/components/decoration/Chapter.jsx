import styles from './Chapter.module.css';

function Chapter(props) {
    return (
        <>
        <div className={styles.chapterContainer}>
            <h1 className={styles.chapterTitle}>{props.title}</h1>
            <hr className={styles.chapterDivider} />
            <div className={styles.chapterContent}>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default Chapter;