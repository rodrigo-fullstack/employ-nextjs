import Image from "next/image";
import './form.css';
import './auth.css';

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

function Container({children, className}){
	return (<section className={"container " + className}>
		{children}
	</section>);
}

function Title({children, className}){
	return (<h1 className={"title " + className}>
		{children}
	</h1>);
}

function Input({ name, type }) {
	const labelName = setLabelName(name);
	return (<label className="input-box login-container__label">
		{labelName}
		<input name={name} type={type} className="input login-container__input" />
	</label>)
}

function setLabelName(name){
	switch(name){
		case 'email':
			return 'Email';
		case 'password': 
			return 'Senha';
		default: return 'Label'
	};
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