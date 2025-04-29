
import style from "./Row.module.css";
export default function MainRow({className = '', children}){
    return (
        <main className={`${style.row} ${className}`}>
            {children}
        </main>
    )
}