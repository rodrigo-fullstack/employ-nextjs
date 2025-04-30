import Container from "../_components/Container";
import { HeaderMobile, Header, SearchRowMobile } from "../_components/dashboard/Header"
import SideBar from "../_components/dashboard/SideBar"

import styles from "../_components/dashboard/Dashboard.module.css";
import MainRow from "../_components/MainRow";

export default function Layout({ children }) {

  return (
  <>
    <SideBar />

    <Container className={`${styles.content} jcs`}>
      <Header />
      <HeaderMobile />

      <SearchRowMobile />

      <MainRow className={`${styles['dashboard-main']}`}>
        {children}
      </MainRow>
    </Container>
  </>
  )
}
