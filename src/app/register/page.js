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
import { useActionState, useReducer, useState } from "react";
import Row from "../_components/Row.js";
import { register } from "../_services/actions.js";
import Title from "../_components/Title.js";

export default function RegisterPage() {
	const initialState = {
		step: 1,
		formData: {
			name: '',
			email: '',
			password: '',
			phone: '',
			birth_date: '',
			current_role: '',
			current_company: '',
			experience_time: '',
			working_area: '',
			education_level: '',
			course: '',
			education_institution: '',
			finish_year: '',
			current_situation: '',
			interest_area: '',
			contract_type: '',
			start_availability: '',
			salary_expectation: '',

		}
	}


	const formReducer = (state, action) => {
		switch (action.type) {
			case "UPDATE_FIELD":
				return {
					...state,
					formData: {
						...state.formData,
						[action.payload.field]: action.payload.value,
					}
				}
			case "NEXT_STEP":
				return {
					...state,
					step: state.step + 1
				}
			case "PREVIOUS_STEP":
				return {
					...state,
					step: state.step - 1
				}
			case "RESET_FORM":
				return initialState;
			default:
				return state;
		}
	}

	const handleNext = (e) => {
		e.preventDefault();
		if (state.step !== Object.keys(stateComponents).length) dispatch({ type: 'NEXT_STEP' })
	};

	const handlePrevious = (e) => {
		e.preventDefault();
		if (state.step > 1) dispatch({ type: "PREVIOUS_STEP" });
	}

	const [state, dispatch] = useReducer(formReducer, initialState);

	console.log(state);

	const stateComponents = {
		1: <GeneralInformation formData={state.formData} dispatch={dispatch} />,
		2: <LastExperience formData={state.formData} dispatch={dispatch} />,
		3: <AcademicBackground formData={state.formData} dispatch={dispatch} />,
		4: <JobContract formData={state.formData} dispatch={dispatch} />
	}

	return <MainContainer className={`
		auth
		${styles.auth} 
		${styles.register}
	`}>
		<Title className={`auth__title ${styles['register__title']}`}>Cadastro</Title>
		<Form className=
			{`
			${styles['auth__form']}
			${styles['register__form']}
			`}
			
		>

			{stateComponents[state.step]}

			<Row className=
				{`
					${styles['auth__buttons-container']}
					${styles['register__buttons-container']}
			`}>
				{state.step > 1 ? <Button className={`
				${styles['auth__button--previous']}
				${styles['auth__button']}
				${styles['register__button--previous']}
				${styles['register__button']}
			`} action={(e) => handlePrevious(e)}>
					Voltar
				</Button> : <span></span>
				}
				{state.step === Object.keys(stateComponents).length ? <Button className=
					{`
					${styles['auth__button']}
					${styles['auth__button--submit']}
					${styles['register__button']}
					${styles['register__button--submit']}
				`}
					type="submit"
				>
					Submeter
				</Button> : <Button className=
					{`
					${styles['auth__button']}
					${styles['auth__button--next']}
					${styles['register__button']}
					${styles['register__button--next']}
				`}
					action={(e) => handleNext(e)}
				>
					Próximo
				</Button>}
			</Row>
		</Form>
	</MainContainer>
}

function GeneralInformation({ formData, dispatch }) {
	const handleChange = (e) => {
		const { name, value } = e.target;

		dispatch({ type: 'UPDATE_FIELD', payload: { field: name, value: value } });
	}

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
					`} type="text" name="name" id="name" onChange={handleChange}
					value={formData.name}/>
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
					`} type="text" name="email" id="email" onChange={handleChange}
					value={formData.email}/>
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
					`} type="password" name="password" id="password" onChange={handleChange} value={formData.password}/>
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
					`} type="phone" name="phone" id="phone" onChange={handleChange} value={formData.phone}/>
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
					`} type="date" name="birth_date" id="birth_date" onChange={handleChange} value={formData.birth_date}/>
			</FormField>
		</Container>
	)
}

function LastExperience({ formData, dispatch }) {
	const handleChange = (e) => {
		const { name, value } = e.target;

		dispatch({ type: 'UPDATE_FIELD', payload: { field: name, value: value } });
	};
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
					`} type="text" name="current_role" id="current_role" onChange={handleChange} value={formData.current_role}/>
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
					`} type="text" name="current_company" id="current_company" onChange={handleChange} value={formData.current_company}/>
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
					`} type="text" name="experience_time" id="experience_time" onChange={handleChange} value={formData.experience_time}/>
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
					`} options={['opcao_1', 'opcao_2', 'opcao_3']} name="working_area" id="working_area" 
					onChange={handleChange}
					value={formData.working_area}
					/>
			</FormField>
		</Container>
	)
}

function AcademicBackground({ formData, dispatch }) {
	const handleChange = (e) => {
		const { name, value } = e.target;

		dispatch({ type: 'UPDATE_FIELD', payload: { field: name, value: value } });
	};
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
					`} name="education_level" options={['opt_1', 'opt_2', 'opt_3']} id="education_level" 
					onChange={handleChange} value={formData.education_level}
					/>
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
					`} type="text" name="course" id="course" onChange={handleChange} value={formData.course}/>
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
					`} type="text" name="education_institution" id="education_institution" onChange={handleChange} value={formData.education_institution}/>
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
					`} type="text" name="finish_year" id="finish_year" onChange={handleChange} value={formData.finish_year}/>
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
					${styles['auth__select']}
					${styles['register__select']}
					`} options={['option_1', 'option_2', 'option_3']} name="current_situation" id="current_situation" onChange={handleChange} value={formData.current_situation}/>
			</FormField>
		</Container>
	)
}

function JobContract({ formData, dispatch }) {
	const handleChange = (e) => {
		const { name, value } = e.target;

		dispatch({ type: 'UPDATE_FIELD', payload: { field: name, value: value } });
	};
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
					`} name="interest_area" options={['opt_1', 'opt_2', 'opt_3']} id="interest_area" onChange={handleChange} value={formData.interest_area}/>
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
					`} options={['option_1', 'option_2', 'option_3']} name="contract_type" id="contract_type" onChange={handleChange} value={formData.contract_type}/>
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
					`} type="text" name="start_availability" id="start_availability" onChange={handleChange} value={formData.start_availability}/>
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
					`} type="text" name="salary_expectation" id="salary_expectation" onChange={handleChange} value={formData.salary_expectation}/>
			</FormField>
		</Container>
	)
}