import styles from "./Form.module.css";
import Input from "./Input";

export default function InputSearch({
    search = "",
    name = "search_vacancy",
    className = "",
}) {
    return (
        <Input
            className={`${styles['input--search']} ${className}`}
            name={name}
            placeholder={`Pesquisar ${search}`}
        />
    )
}