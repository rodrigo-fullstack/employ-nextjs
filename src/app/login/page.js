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

	if (data) console.log(data);
	return (
		<form className={`${styles['form']} ${styles['form--auth']} login__form form ${containerStyles.container}`} action={formAction}>
			<Container className="login__logo-box">
				<Image
					src="./employ.svg"
					alt="employ logo com um ícone de conta envolvido"
					width={180}
					height={150}
					className="logo login__logo"
				/>
			</Container>

			<Container className="login__title-box">
				<Title className="login__title">
					Login
				</Title>
				<hr className="login__hr" />
			</Container>

			<Inputs errors={data?.errors} />

			<Button className='login__login-btn' type='submit'>
				Acessar
			</Button>
		</form>)
}

function Inputs({ errors = null }) {
	return (<Container className={
		`login__inputs g-1rem`
	}>
		<FormField labelClassName="login__field" labelTextClassName="login__label-text" label="Email" name="email" errors={errors?.email}>
			<Input name="email" type="email" className="login__input" placeholder="Ex: rodrigo@gmail.com" />
		</FormField>

		<FormField labelClassName="login__field login__field--password" labelTextClassName="login__label-text" label="Senha" name="password" errors={errors?.password}>
			<Input name="password" type="password" className="login__input" />
		</FormField>
	</Container>)
}

export default function LoginPage() {
	return <main className={`login ${containerStyles.container}`}>
		<Form></Form>
	</main>
}