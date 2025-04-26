import Image from "next/image";


export default function SideBar() {
    return (
        <aside className="sidebar dashboard-sidebar container">
            <section className="sidebar__logo-container dashboard-sidebar__logo-container">
                <Image
                    className="sidebar__logo dashboard-sidebar__logo"
                    src='./employ.svg'
                    width={180}
                    height={150}
                    alt="Logo do Employ"
                />
            </section>
            <hr></hr>

            <SideBarMenu />

            <section className="sidebar__settings-container dashboard-sidebar__settings-container">
                <Image 
                src="./settings.svg"
                width={32}
                height={32}
                className="sidebar__settings-icon dashboard-sidebar__settings-icon"
                />
            </section>
        </aside>
    );
}

function SideBarMenu() {
    return (
        <nav className="sidebar__menu dashboard-sidebar__menu">
            <ul className="list sidebar__list dashboard-sidebar__list">
                <SideBarMenuLink src="./vagas.svg" alt="Ícone de vaga com uma pessoa segurando um formulário.">
                    Vagas
                </SideBarMenuLink>
                <SideBarMenuLink src="./candidaturas.svg" alt="Ícone de candidaturas.">
                    Candidaturas
                </SideBarMenuLink>
                <SideBarMenuLink src="./empresas.svg" alt="Ícone de empresa preenchido em branco.">
                    Empresas
                </SideBarMenuLink>
            </ul>
        </nav>
    )
}

function SideBarMenuLink({ src, alt, children }) {
    return (<a className="link sidebar__link dashboard-sidebar__link" href="/dashboard">
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

            <span className="text sidebar__item-text dashboard-sidebar__item-text">
                {children}
            </span>
        </li>
    </a>);
}