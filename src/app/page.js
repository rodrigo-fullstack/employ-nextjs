import Image from "next/image";
import styles from "./page.module.css";

export default function LoginPage(){
    return <main className="login-container">
		<form className="login-container__logo-box" style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: '100vh',
			flexDirection: 'column',
			gap: '1rem',
		}}>
			<Image 
			src="./employ.svg"
			alt="employ logo com um ícone de conta envolvido"
			width={200}
			height={200}
			/>


		</form>
	</main>
}