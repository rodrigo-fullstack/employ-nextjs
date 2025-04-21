
export default function Error({children, className}){
    return (
        <li className={"item item--error " + className}>{children}</li>
    )
}