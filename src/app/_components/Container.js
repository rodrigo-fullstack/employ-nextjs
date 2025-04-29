import styles from "./Container.module.css";

export default function Container({children, className}){
	return (<section className={`${styles.container} ${className}`}>
		{children}
	</section>);
}