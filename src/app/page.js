import Image from "next/image";
import './form.css';

function Form() {
	return (
		<form className="login-container__form form container">
			<section class="login-container__logo-box">
				<Image
					src="./employ.svg"
					alt="employ logo com um ícone de conta envolvido"
					width={200}
					height={200}
				/>
			</section>

			<Inputs></Inputs>

			<Button className='login-container__login-btn' type='submit'>
				Acessar
			</Button>
		</form>)
}

function Input({ name, type }) {
	const labelName = name;

	return (<label className="input-box login-container__label">
		{labelName}
		<input name={name} type={type} className="input login-container__input" />
	</label>)
}

function Inputs() {
	return (<section className={
		`login-container__inputs container g-1rem`
	}>
		<Input name='email' type='email' />
		<Input name='password' type='password' />
	</section>)
}

function Button({ children, className, type }) {
	const newClassName = 'btn ' + type + ' ' + className;
	return (
		<button type={type} className={newClassName}>
			{children}
		</button>
	)
}

export default function LoginPage() {
	return <main className="login-container container">
		<Form></Form>
	</main>
}