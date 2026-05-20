import styles from './ClickableText.module.css';

function ClickableTextToWebsite(props) {
    return (
        <>
        <p className={styles.clickableText} onClick={() => window.location.href = props.destination}>
            {props.children}
        </p>
        </>
    )
}

export default ClickableTextToWebsite;