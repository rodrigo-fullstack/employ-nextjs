export default function Input({ name, type, forgotPassword = false }) {
	const labelName = setLabelName(name);
	return (<label className="input-box login-container__label">
		{forgotPassword ? 
		(<div className="row">
			<span>{labelName}</span>
			<span className="bold login-container__forgot-password">Esqueceu a senha?</span>
		</div>)
		: labelName}
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