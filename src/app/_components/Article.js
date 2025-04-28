export default function Article({children, className}){
	return (<article className={"container " + className}>
		{children}
	</article>);
}