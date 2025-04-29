import styles from "./Title.module.css";
import { secondaryFont } from "../fonts.js";

export default function Title({children, className}){
	className = `${styles.title} ${secondaryFont.className} ${className}`;
	return (<h1 className={className}>
		{children}
	</h1>);
}