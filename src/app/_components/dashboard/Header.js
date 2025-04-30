import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import InputSearch from "../InputSearch";
import ButtonSearch from "../ButtonSearch";
import Row from "../Row";
import styles from "./Header.module.css";
import dsStyles from "./Dashboard.module.css";
import Title from "../Title";

// Header Desktop
export function Header() {
    return (
        <header className={`header dashboard-header ${styles["dashboard-header"]} ${styles["dashboard-header--desktop"]}`}>
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

            <ProfileItem src="./profile.svg" alt="Ícone de perfil." className={`${dsStyles.person}`}>
                profile
            </ProfileItem>
        </Row>
    );
}

function ProfileItem({ children, src = "", alt = "", className = "" }) {
    return (
        <div className={`${children} header__profile-item dashboard-header__profile-item ${styles["dashboard-header__profile-item"]}`}>
            <Image
                width={50}
                height={50}
                alt={alt}
                className={`icon icon--${children} header__profile-icon dashboard-header__profile-icon ${styles["dashboard-header__profile-icon"]} ${className}`}
                src={src}
            />
        </div>
    );
}

// Header Mobile
export function HeaderMobile() {
    return (
        <header className={`header dashboard-header ${styles["dashboard-header"]} ${styles["dashboard-header--mobile"]}`}>
            <Row className={`${styles['dashboard-header__actions-row']}`}>
                <span className={`icon ${styles['dashboard-header__menu-icon']} ${styles['dashboard-header__action']}`}
                >
                    <Image
                        width={38}
                        height={41}
                        src="./menu.svg"
                        alt="Ícone de menu"
                    />
                </span>

                <a href="/dashboard" className={`${styles['dashboard-header__logo']} ${styles['dashboard-header__action']}`}
                >
                    <Image
                        width={38}
                        height={41}
                        src="./logo-mobile.svg"
                        alt="Logo Mobile"
                    />
                </a>
            </Row>

            <ProfileMobile />
        </header>
    );
}

export function SearchRowMobile() {
    return (
        <Container className={`${styles["dashboard-header__search-container--mobile"]}`}>
            <Title className={`title header__title dashboard-header__title ${styles["dashboard-header__title"]}`}>
                Vagas
            </Title>

            <FormSearch />
        </Container>
    )
}

function ProfileMobile() {
    return (
        <Row className={`jcs header__profile-container dashboard-header__profile-container ${styles["dashboard-header__profile-container"]}`}>
            <ProfileItemMobile src="./chat.svg" alt="Ícone de chat.">
                chat
            </ProfileItemMobile>

            <ProfileItemMobile src="./notification.svg" alt="Ícone de notificação.">
                notification
            </ProfileItemMobile>

            <ProfileItemMobile src="./profile.svg" alt="Ícone de perfil." className={`${dsStyles.person}`}>
                profile
            </ProfileItemMobile>
        </Row>
    );
}

function ProfileItemMobile({ children, src = "", alt = "", className = "" }) {
    return (
        <div className={`${children} header__profile-item dashboard-header__profile-item ${styles["dashboard-header__profile-item"]}`}>
            <Image
                width={39}
                height={39}
                alt={alt}
                className={`icon icon--${children} header__profile-icon dashboard-header__profile-icon ${styles["dashboard-header__profile-icon"]}
                ${className} `}
                src={src}
            />
        </div>
    );
}