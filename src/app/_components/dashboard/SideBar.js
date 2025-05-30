'use client'
import Image from "next/image";
import List from "../List";
import Container from "../Container";
import Title from "../Title";
import styles from "./SideBar.module.css";
import containerStyles from "../Container.module.css";
import { useState } from "react";

export default function SideBar({ menuMobileOpen = null, setMenuMobileOpen = null }) {
    console.log(menuMobileOpen);
    if (menuMobileOpen === null) {
        return (
            <aside className={`${styles["dashboard-sidebar"]}`}>
                <Container className={`${styles["dashboard-sidebar__logo-container"]}`}>
                    <Image
                        className={styles["dashboard-sidebar__logo"]}
                        src='./employ.svg'
                        width={180}
                        height={150}
                        alt="Logo do Employ"
                    />
                    <hr className={styles["dashboard-sidebar__hr"]} />
                </Container>

                <SideBarMenu />

                <Container className={styles["dashboard-sidebar__settings-container"]}>
                    <Image
                        src="./settings.svg"
                        width={32}
                        height={32}
                        className={styles["dashboard-sidebar__settings-icon"]}
                    />
                </Container>
            </aside>
        );
    }

    return (
        <aside className={`${styles["dashboard-sidebar"]} ${menuMobileOpen && styles["dashboard-sidebar--mobile"]}`}>
            <Container className={`${styles["dashboard-sidebar__logo-container"]}`}>
                {menuMobileOpen && <span className={`icon ${styles['dashboard-sidebar__menu-icon']} ${styles['dashboard-sidebar__action']}`}
                    onClick={() => setMenuMobileOpen(false)}>
                    <Image
                        width={38}
                        height={41}
                        src="./menu.svg"
                        alt="Ícone de menu"
                    />
                </span>}

                <Image
                    className={styles["dashboard-sidebar__logo"]}
                    src='./employ.svg'
                    width={180}
                    height={150}
                    alt="Logo do Employ"
                />
                <hr className={styles["dashboard-sidebar__hr"]} />
            </Container>

            <SideBarMenu />

            <Container className={styles["dashboard-sidebar__settings-container"]}>
                <Image
                    src="./settings.svg"
                    width={32}
                    height={32}
                    className={styles["dashboard-sidebar__settings-icon"]}
                />
            </Container>
        </aside>)
}

function SideBarMenu() {
    return (
        <nav className={styles["dashboard-sidebar__menu"]}>
            <List className={styles["dashboard-sidebar__list"]}>
                <SideBarMenuItem
                    src="./vacancy.svg"
                    alt="Ícone de vaga com uma pessoa segurando um formulário."
                    className={styles["dashboard-sidebar__link--active"]}
                >
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
    );
}

function SideBarMenuItem({ className = "", src, alt, children }) {
    return (
        <a
            className={`${styles["dashboard-sidebar__link"]} ${className}`}
            href="/dashboard"
        >
            <li className={styles["dashboard-sidebar__item"]}>
                <span className={styles["dashboard-sidebar__item-icon"]}>
                    <Image
                        src={src}
                        className={styles["sidebar__item-icon-image"]}
                        width={32}
                        height={32}
                        alt={alt}
                    />
                </span>

                <Title className={styles["dashboard-sidebar__item-text"]}>
                    {children}
                </Title>
            </li>
        </a>
    );
}