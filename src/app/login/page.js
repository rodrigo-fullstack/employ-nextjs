import Image from "next/image";
import Button from "../_components/Button.js";
import Container from "../_components/Container.js";
import Input from "../_components/Input.js";
import Title from "../_components/Title.js";
import '../form.css';
import '../auth.css';

function Form() {
	return (
		<form className="login-container__form form container">
			<Container className="login-container__logo-box">
				<Image
					src="./employ.svg"
					alt="employ logo com um ícone de conta envolvido"
					width={180}
					height={150}
					className="logo login-container__logo"
				/>
			</Container>

			<Container className="login-container__title-box">
				<Title className="login-container__title">
					Login
				</Title>
				<hr className="login-container__hr"/>
			</Container>

			<Inputs />

			<Button className='login-container__login-btn' type='submit'>
				Acessar
			</Button>
		</form>)
}

function Inputs() {
	return (<section className={
		`login-container__inputs container g-1rem`
	}>
		<Input name='email' type='email' />
		<Input name='password' type='password' forgotPassword={true}/>
	</section>)
}

export default function LoginPage() {
	return <main className="login-container container">
		<Form></Form>
	</main>
}