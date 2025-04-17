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
    // return <ComponentWithVar data="Teste"/>;

	const virtues = ['Sabedoria', 'Justiça', 'Inteligência'];
    return <List data={virtues}/>;
}

// function ComponentWithVar({data}){
// 	return <>
// 		I'm a ComponentWithVar: {data}
// 	</>
// }

function List(virtues){
	console.log(virtues);
	
	const listItems = virtues.data.map((value) => {
		console.log(value);
		return <li>
			{value}
		</li>
	})

	return <ul>
		{listItems}
	</ul>
}