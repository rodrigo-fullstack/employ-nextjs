import styles from "@/app/_components/Form.module.css"

export default function Form({
    className = "",
    action = null,
    children,
    method = "POST",
    encType = "" }
) {
    return (
        <form className={`
            ${styles.form}
            ${styles['form--auth']}
            ${className}
        `} method={method}
            encType={encType}
            action={action}
            >
            {children}
        </form>
    )
}