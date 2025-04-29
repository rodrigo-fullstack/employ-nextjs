import List from "./List.js";
import ErrorItem from "./ErrorItem.js";
import styles from "./Form.module.css";

export default function Input({
	name = "",
	id = "",
	type = "text",
	className = "",
	placeholder = "",
	...props
}){
	return (
		<input 
		type={type}
		name={name}
		className={`${styles.input} ${className}`}
		placeholder={placeholder}
		{...props}
		/>
	)
}