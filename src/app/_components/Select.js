import styles from "./Form.module.css";

export default function Select({
    className = "",
    options = [],
    name = "",
    id = "", 
    ...props
}) {

    const optionsElements = options.map(option => {
        return <option className="" value={option}>{option}</option>
    });
    return (<select className=
        {`
        ${styles.select}
        ${className}
    `}
    name={name}
    id={id}
    {...props}
    >
        {optionsElements}       
    </select>)
}