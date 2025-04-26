import List from "./List.js";
import Error from "./Error.js";

export default function Input(
	{
		className = '',
		name,
		type = 'text',
		forgotPassword = false,
		errors = null,
		hasLabel = true
	}
) {
	let labelName = null;
	if (hasLabel) {
		labelName = setLabelName(name);
	}
	let errorList = null;
	if (errors) {
		let errorsItems = errors.map(element =>
			(<Error>{element}</Error>)
		);
		errorList = <List className="list--error">
			{errorsItems}
		</List>
	}


	return (<label className="input-box">
		{forgotPassword ?
			(<div className="row">
				{labelName && <span>{labelName}</span>}
				<span className="bold login-container__forgot-password">Esqueceu a senha?</span>
			</div>)
			: labelName && <span>{labelName}</span>
		}
		<input name={name} type={type} className={"input " + className} />
		{errorList ?? ''}
	</label>)
}

function setLabelName(name) {
	switch (name) {
		case 'email':
			return 'Email';
		case 'password':
			return 'Senha';
		default: return name
	};
}