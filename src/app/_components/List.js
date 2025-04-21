export default function List({className, children}){
    return (<ul className={"list " + className}>
        {children}
    </ul>)
}