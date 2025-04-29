import styles from "./Container.module.css";

export default function Article({children, className}){
	return (<article className={`${styles.container} ${className}`}>
		{children}
	</article>);
}