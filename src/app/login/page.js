'use client';

import Image from "next/image";
import Button from "../_components/Button.js";
import Container from "../_components/Container.js";
import Input from "../_components/Input.js";
import FormField from "../_components/FormField.js";
import Title from "../_components/Title.js";
import styles from '@/app/_components/Form.module.css'
import containerStyles from '@/app/_components/Container.module.css'
import '../auth.css';
import { login } from "../_services/actions.js";
import { useActionState } from "react";

function Form() {
	const [data, formAction] = useActionState(login, null);

	return (
		<form className={`${styles['form']} ${styles['form--auth']} login__form form`} action={formAction}>
			<Container className="auth__logo-box">
				<Image
					src="./employ.svg"
					alt="employ logo com um ícone de conta envolvido"
					width={180}
					height={150}
					className="logo auth__logo"
				/>
			</Container>

			<Container className="auth__title-box">
				<Title className="auth__title">
					Login
				</Title>
				<hr className={`auth__hr ${styles['auth__hr']}`} />
			</Container>

			<Inputs errors={data?.errors} />

			<Button className='auth__submit-btn' type='submit'>
				Acessar
			</Button>
		</form>)
}

function Inputs({ errors = null }) {
	return (<Container className={
		`auth__inputs g-1rem`
	}>
		<FormField labelClassName="login__field" labelTextClassName="login__label-text" label="Email" name="email" errors={errors?.email}>
			<Input name="email" type="email" className="auth__input" placeholder="Ex: rodrigo@gmail.com" />
		</FormField>

		<FormField labelClassName="login__field login__field--password" labelTextClassName="login__label-text" label="Senha" name="password" errors={errors?.password}>
			<Input name="password" type="password" className="auth__input" />
		</FormField>
	</Container>)
}

export default function LoginPage() {
	return <main className={`auth ${containerStyles.container}`}>
		<Form></Form>
	</main>
}