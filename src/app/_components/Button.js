import styles from "./Button.module.css";

export default function Button({ children, className, type }) {
	const newClassName = `${styles.btn} ${className}`
	return (
		<button type={type} className={newClassName}>
			{children}
		</button>
	)
}