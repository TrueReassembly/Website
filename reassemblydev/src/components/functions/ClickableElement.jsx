import styles from './ClickableElement.module.css';

function ClickableElementToWebsite(props) {
    return (
        <>
        <div className={styles.clickableElement} onClick={() => window.location.href = props.destination}>
            {props.children}
        </div>
        </>
    )
}

export default ClickableElementToWebsite;