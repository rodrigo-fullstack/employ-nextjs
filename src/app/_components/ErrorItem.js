import styles from "./Error.module.css"

export default function ErrorItem({children, className}){
    return (
        <li className={`item ${styles['item--error']} ${className}`}>{children}</li>
    )
}