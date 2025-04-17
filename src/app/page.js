import Image from "next/image";
import styles from "./page.module.css";

// export default function HelloWorld() {
//   return (
//     <div>
//       Hello, World
//     </div>
//   )
// }

export default function Main(){
    return <ComponentWithVar data="Teste"/>;
}

function ComponentWithVar({data}){
	return <>
		I'm a ComponentWithVar: {data}
	</>
}