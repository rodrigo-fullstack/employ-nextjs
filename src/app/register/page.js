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
import Select from "../_components/Select.js";

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

			{/* <GeneralInformation /> */}
			{/* <LastExperience /> */}
			{/* <AcademicBackground /> */}
			<JobContract />

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

function GeneralInformation() {
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

function LastExperience() {
	return (
		<Container className={`
			${styles['auth__inputs-container']}
			${styles['register__inputs-container']}
		`}>
			<FormField label="Cargo Atual" name="current_role" labelClassName=
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
					`} type="text" name="current_role" id="current_role" />
			</FormField>

			<FormField label="Empresa Atual" name="current_company" labelClassName=
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
					`} type="text" name="current_company" id="current_company" />
			</FormField>

			<FormField label="Tempo de experiência" name="experience_time" labelClassName=
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
					`} type="text" name="experience_time" id="experience_time" />
			</FormField>

			<FormField label="Área de Atuação" name="working_area" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>

				<Select className={`
					${styles['auth__select']}
					${styles['register__select']}
					`} options={['opcao_1', 'opcao_2', 'opcao_3']} name="working_area" id="working_area" />
			</FormField>
		</Container>
	)
}

function AcademicBackground() {
	return (
		<Container className={`
			${styles['auth__inputs-container']}
			${styles['register__inputs-container']}
		`}>
			<FormField label="Nível de Escolaridade" name="education_level" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>

				<Select className={`
					${styles['auth__select']}
					${styles['register__select']}
					`} name="education_level" options={['opt_1', 'opt_2', 'opt_3']} id="education_level" />
			</FormField>

			<FormField label="Curso" name="course" labelClassName=
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
					`} type="text" name="course" id="course" />
			</FormField>

			<FormField label="Instituição de ensino" name="education_institution" labelClassName=
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
					`} type="text" name="education_institution" id="education_institution" />
			</FormField>

			<FormField label="Ano de conclusão" name="finish_year" labelClassName=
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
					`} type="text" name="finish_year" id="finish_year" />
			</FormField>

			<FormField label="Situação Atual" name="current_situation" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>


				<Select className={`
					${styles['auth__input']}
					${styles['register__input']}
					`} name="current_situation" id="current_situation" />
			</FormField>
		</Container>
	)
}

function JobContract() {
	return (
		<Container className={`
			${styles['auth__inputs-container']}
			${styles['register__inputs-container']}
		`}>
			<FormField label="Área de Interesse" name="interest_area" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>

				<Select className={`
					${styles['auth__select']}
					${styles['register__select']}
					`} name="interest_area" options={['opt_1', 'opt_2', 'opt_3']} id="interest_area" />
			</FormField>

			<FormField label="Tipo de contrato desejado" name="contract_type" labelClassName=
				{`
				${styles['auth__field']}
				${styles['register__field']}
				`}

				labelTextClassName=
				{`
					${styles['auth__label-text']}
					${styles['register__label-text']}
				`}>

				<Select className={`
					${styles['auth__select']}
					${styles['register__select']}
					`} name="contract_type" id="contract_type" />
			</FormField>

			<FormField label="Disponibilidade de Início" name="start_availability" labelClassName=
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
					`} type="text" name="contract_type" id="contract_type" />
			</FormField>

			<FormField label="Pretensão Salarial" name="salary_expectation" labelClassName=
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
					`} type="text" name="salary_expectation" id="salary_expectation" />
			</FormField>
		</Container>
	)
}