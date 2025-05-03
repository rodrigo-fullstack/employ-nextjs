import styles from "./Form.module.css";

export default function Select({
    className = "",
    options = [],
    name = "",
    id = ""
}) {

    const optionsElements = options.map(option => {
        return <option className="" value={option}>{option}</option>
    });
    return (<select className=
        {`
        ${styles.select}
        ${className}
    `}>
        {optionsElements}       
    </select>)
}