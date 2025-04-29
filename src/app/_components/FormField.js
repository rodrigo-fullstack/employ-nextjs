import ErrorItem from "./ErrorItem";

export default function FormField({
	label = "",
	name = "",
	children,
	labelClassName = '',
	labelTextClassName = '',
	errors = null,
}) {
	const hasErrors = errors && errors.length !== 0;
	return (
		<label className={"input-box " + labelClassName} htmlFor={name}>
			{label && <span className={"text " + labelTextClassName}>{label}</span>}
			{children}

			{hasErrors && <List className="list--error">
				{errors.map(error => {
					<ErrorItem>
						{error}
					</ErrorItem>
				})}
			</List>}
		</label>
	);
}