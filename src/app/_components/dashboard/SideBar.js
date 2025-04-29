import Image from "next/image";
import List from "../List";
import Container from "../Container";
import Title from "../Title";
import styles from "../Container.module.css";

export default function SideBar() {
    return (
        <aside className={`sidebar dashboard-sidebar ${styles.container}`}>
            <Container className="sidebar__logo-container dashboard-sidebar__logo-container">
                <Image
                    className="sidebar__logo dashboard-sidebar__logo"
                    src='./employ.svg'
                    width={180}
                    height={150}
                    alt="Logo do Employ"
                />
            <hr className="sidebar__hr dashboard-sidebar__hr"/>
            </Container>

            <SideBarMenu />

            <Container className="sidebar__settings-container dashboard-sidebar__settings-container">
                <Image
                    src="./settings.svg"
                    width={32}
                    height={32}
                    className="sidebar__settings-icon dashboard-sidebar__settings-icon"
                />
            </Container>
        </aside>
    );
}

function SideBarMenu() {
    return (
        <nav className="sidebar__menu dashboard-sidebar__menu">
            <List className="sidebar__list dashboard-sidebar__list">
                <SideBarMenuItem src="./vacancy.svg" alt="Ícone de vaga com uma pessoa segurando um formulário."
                className="dashboard-sidebar__link--active">
                    Vagas
                </SideBarMenuItem>
                <SideBarMenuItem src="./candidate.svg" alt="Ícone de candidaturas.">
                    Candidaturas
                </SideBarMenuItem>
                <SideBarMenuItem src="./company.svg" alt="Ícone de empresa preenchido em branco.">
                    Empresas
                </SideBarMenuItem>
            </List>
        </nav>
    )
}

function SideBarMenuItem({ className="", src, alt, children }) {
    return (<a className={"sidebar__link dashboard-sidebar__link " + className} href="/dashboard">
        <li className="item sidebar__item dashboard-sidebar__item">
            <span className="icon sidebar__item-icon dashboard-sidebar__item-icon">
                <Image
                    src={src}
                    className="sidebar__item-icon-image"
                    width={32}
                    height={32}
                    alt={alt}
                />
            </span>

            <Title className="sidebar__item-text dashboard-sidebar__item-text">
                {children}
            </Title>
        </li>
    </a>);
}