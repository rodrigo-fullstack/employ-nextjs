import styles from "./Row.module.css";

export default function Row({ className, children }) {
    return (<section className={`${styles.row} ${className}`} >
        {children}
    </section>)
}