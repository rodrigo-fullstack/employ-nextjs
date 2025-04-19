
export default function Button({ children, className, type }) {
	const newClassName = 'btn ' + type + ' ' + className;
	return (
		<button type={type} className={newClassName}>
			{children}
		</button>
	)
}