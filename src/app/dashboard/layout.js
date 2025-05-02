'use client'
import Container from "../_components/Container";
import { HeaderMobile, Header, SearchRowMobile } from "../_components/dashboard/Header"
import SideBar from "../_components/dashboard/SideBar"

import styles from "../_components/dashboard/Dashboard.module.css";
import MainRow from "../_components/MainRow";
import { useState } from "react";

export default function Layout({ children }) {
  const [menuMobileOpen, setMenuMobileOpen] = useState(null);
  console.log(menuMobileOpen);
  return (
    <>
      <SideBar menuMobileOpen={menuMobileOpen} setMenuMobileOpen={setMenuMobileOpen}/>

      <HeaderMobile setMenuMobileOpen={setMenuMobileOpen} />
      <Container className={`${styles.content} jcs`}>
        <Header />

        <SearchRowMobile />

        <MainRow className={`${styles['dashboard-main']}`}>
          {children}
        </MainRow>
      </Container>
    </>
  )
}
