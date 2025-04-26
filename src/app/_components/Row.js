export default function Row({ className, children }) {
    return (<section className={"row " + className} >
        {children}
    </section>)
}