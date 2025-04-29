import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import InputSearch from "../InputSearch";
import ButtonSearch from "../ButtonSearch";
import Row from "../Row";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={`header dashboard-header ${styles["dashboard-header"]}`}>
            <Container className={`header__title-container dashboard-header__title-container ${styles["dashboard-header__title-container"]}`}>
                <h1 className={`title header__title dashboard-header__title ${styles["dashboard-header__title"]}`}>
                    Vagas
                </h1>
            </Container>

            <FormSearch />

            <Profile />
        </header>
    );
}

function FormSearch() {
    return (
        <form className={`form form--search header__search-form dashboard-header__search-form ${styles["dashboard-header__search-form"]}`}>
            <InputSearch
                className={`header__search-input dashboard-header__search-input ${styles["dashboard-header__search-input"]}`}
                name="search_vacancy"
                search="Vagas"
            />
            <ButtonSearch />
        </form>
    );
}

function Profile() {
    return (
        <Row className={`jcs header__profile-container dashboard-header__profile-container ${styles["dashboard-header__profile-container"]}`}>
            <ProfileItem src="./chat.svg" alt="Ícone de chat.">
                chat
            </ProfileItem>

            <ProfileItem src="./notification.svg" alt="Ícone de notificação.">
                notification
            </ProfileItem>

            <ProfileItem src="./profile.svg" alt="Ícone de perfil.">
                profile
            </ProfileItem>
        </Row>
    );
}

function ProfileItem({ children, src = "", alt = "" }) {
    return (
        <div className={`${children} header__profile-item dashboard-header__profile-item ${styles["dashboard-header__profile-item"]}`}>
            <Image
                width={50}
                height={50}
                alt={alt}
                className={`icon icon--${children} header__profile-icon dashboard-header__profile-icon ${styles["dashboard-header__profile-icon"]}`}
                src={src}
            />
        </div>
    );
}