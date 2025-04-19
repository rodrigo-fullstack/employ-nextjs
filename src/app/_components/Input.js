export default function Input({ name, type }) {
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