import List from "./List.js";
import Error from "./Error.js";

export default function Input({ name, type, forgotPassword = false, errors = null }) {
	const labelName = setLabelName(name);
	let errorList = null;
	if (errors) {
		let errorsItems = errors.map(element =>
			(<Error>{element}</Error>)
		);
		errorList = <List className="list--error">
			{errorsItems}
		</List>
	}


	return (<label className="input-box login-container__label">
		{forgotPassword ?
			(<div className="row">
				<span>{labelName}</span>
				<span className="bold login-container__forgot-password">Esqueceu a senha?</span>
			</div>)
			: labelName}
		<input name={name} type={type} className="input login-container__input" />
		{errorList ?? ''}
	</label>)
}

function setLabelName(name) {
	switch (name) {
		case 'email':
			return 'Email';
		case 'password':
			return 'Senha';
		default: return 'Label'
	};
}