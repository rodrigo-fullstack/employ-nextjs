import Image from "next/image";
import Button from "./Button";
import styles from "./Form.module.css"

export default function ButtonSearch() {
    return (
        <Button type="submit" className={`${styles['btn--search']} header__search-btn dashboard-header__search-btn`}>
            <Image
                width={28}
                height={28}
                className="icon icon--search"
                alt="Search"
                src="./search.svg"
            />

        </Button>
    )
}