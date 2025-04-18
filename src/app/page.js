import Image from "next/image";
import styles from "./page.module.css";

function Form() {
	return (
		<form className="login-container__logo-box container" style={{
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

		<Inputs></Inputs>
		</form>)
}

function Input({name, type}){
	const labelName = name;
	
	return (<label>
			{labelName}
			<input name={name} type={type}/>
		</label>)
}

function Inputs() {
	return (<section className="login-container__inputs container">
		<Input name='email' type='email' />
		<Input name='password' type='password' />
	</section>)
}

export default function LoginPage() {
	return <main className="login-container container">
		<Form></Form>
	</main>
}