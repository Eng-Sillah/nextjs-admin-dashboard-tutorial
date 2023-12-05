import styles from "./footer.module.css"

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Sillah Logo</div>
            <div className={styles.text}>© All right reserved</div>
        </div>
    )
}

export default Footer;