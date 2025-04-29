import List from "./List.js";
import ErrorItem from "./ErrorItem.js";


export default function Input({
	name = "",
	id = "",
	type = "text",
	className = "",
	placeholder = "",
	...props
}){
	return (
		<input 
		type={type}
		name={name}
		className={"input " + className}
		placeholder={placeholder}
		{...props}
		/>
	)
}

function InputOld(
	{
		className = '',
		name,
		type = 'text',
		forgotPassword = false,
		errors = null,
		hasLabel = true,
		placeholder = ""
	}
) {
	let labelName = null;
	if (hasLabel) {
		labelName = setLabelName(name);
	}
	let errorList = null;
	if (errors) {
		let errorsItems = errors.map(element =>
			(<ErrorItem>{element}</ErrorItem>)
		);
		errorList = <List className="list--error">
			{errorsItems}
		</List>
	}


	return (<label className="input-box">
		{forgotPassword ?
			(<div className="row">
				{labelName && <span>{labelName}</span>}
				<span className="bold login__forgot-password">Esqueceu a senha?</span>
			</div>)
			: labelName && <span>{labelName}</span>
		}
		<input
			name={name}
			type={type}
			className={"input " + className} 
			placeholder={placeholder}
			/>
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