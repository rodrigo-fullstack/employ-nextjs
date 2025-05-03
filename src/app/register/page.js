'use client';

import Button from "../_components/Button.js";
import Input from "../_components/Input.js";
import FormField from "../_components/FormField.js";
import '../auth.css';
import Form from "../_components/Form.js";
import formStyles from '@/app/_components/Form.module.css'
import styles from "../_components/register/Register.module.css";
import MainContainer from "../_components/MainContainer.js";
import Container from "../_components/Container.js";

export default function RegisterPage() {
	return <MainContainer className={`
		${styles.auth} 
		${styles.register}
	`}>
		<Form className=
			{`
			${styles['auth__form']}
			${styles['register__form']}
			`}>
			
			<GeneralInformation />

			<Button className=
				{`
					${styles['auth__button']}
					${styles['register__button']}
				`}
				type="submit"
				>
				Próximo
			</Button>
		</Form>
	</MainContainer>
}

function GeneralInformation(){
	return (
		<Container className={`
			${styles['auth__inputs-container']}
			${styles['register__inputs-container']}
		`}>
			<FormField label="Nome Completo" name="name" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>

				<Input className={`
					${styles['auth__input']}
					${styles['register__input']}
					`} type="text" name="name" id="name" />
			</FormField>

			<FormField label="E-mail" name="email" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>

				<Input className={`
					${styles['auth__input']}
					${styles['register__input']}
					`} type="text" name="email" id="email" />
			</FormField>

			<FormField label="Senha" name="password" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>

				<Input className={`
					${styles['auth__input']}
					${styles['register__input']}
					`} type="password" name="password" id="password" />
			</FormField>

			<FormField label="Telefone para Contato" name="phone" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>

				<Input className={`
					${styles['auth__input']}
					${styles['register__input']}
					`} type="phone" name="phone" id="phone" />
			</FormField>

			<FormField label="Data de Nascimento" name="birth_date" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>

				<Input className={`
					${styles['auth__input']}
					${styles['register__input']}
					`} type="date" name="birth_date" id="birth_date" />
			</FormField>
		</Container>
	)
}