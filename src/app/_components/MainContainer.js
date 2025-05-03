import styles from "./Container.module.css"

export default function MainContainer({className, children}){
    return (
        <main className=
        {`
        ${styles.container}
        ${className}
        `}>
            {children}
        </main>
    )
}