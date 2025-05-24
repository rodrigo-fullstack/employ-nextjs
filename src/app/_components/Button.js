import styles from "./Button.module.css";

export default function Button({ children = '', className = '', type = 'button', action = null}) {
	const newClassName = `${className} ${styles.btn}`
	return (
		<button type={type} className={newClassName} onClick={action}>
			{children}
		</button>
	)
}