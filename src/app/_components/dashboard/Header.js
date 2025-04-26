import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import Input from "../Input";
import { Row } from "../Row";


export default function Header() {
    return (
        <header className="header dashboard-header">
            <Container className="header__title-container dashboard-header__title-container">
                <h1 className="title header__title dashboard-header__title">
                    Vagas
                </h1>
            </Container>

            <FormSearch />

            <Profile />
        </header>
    )
}

function FormSearch() {
    return (
        <form className="form form--search 
    header__search-form dashboard-header__search-form">
            <Input className="input--search header__search dashboard-header__search" name="search" hasLabel={false} 
            placeholder="Pesquisar vagas"/>
            <Button type="submit" className="btn--search header__search-btn dashboard-header__search-btn">
                <Image
                    width={28}
                    height={28}
                    className="icon icon--search header__search-icon
            dashboard-header__search-icon"
                    src="./search.svg"
                />
            </Button>
        </form>
    )
}

function Profile() {
    return (
        <Row className="jcs header__profile-container dashboard-header__profile-container">
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
    )
}

function ProfileItem({ children, src = "", alt = "" }) {
    return <div className={children + " header__profile-item dashboard-header__profile-item"}>
        <Image
            width={50}
            height={50}
            alt={alt}
            className={"icon icon--" + children + " header__profile-icon dashboard-header__profile-icon"}
            src={src}
        />
    </div>
}