import styles from "./Form.module.css";

export default function Select({
    className = "",
    options = [],
    name = "",
    id = ""
}) {

    const optionsElements = options.map(option => {
        return <opt className="" value={option}>{option}</opt>
    });
    return (<select className=
        {`
        ${styles.select}
        ${className}
    `}>
        {optionsElements}       
    </select>)
}