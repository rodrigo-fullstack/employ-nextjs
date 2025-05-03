import styles from "./Button.module.css";

export default function Button({ children = '', className = '', type = 'button', action = null}) {
	const newClassName = `${styles.btn} ${className}`
	return (
		<button type={type} className={newClassName} onClick={action}>
			{children}
		</button>
	)
}