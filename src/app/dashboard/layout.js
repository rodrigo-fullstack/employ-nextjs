import Container from "../_components/Container";
import Header from "../_components/dashboard/Header"
import SideBar from "../_components/dashboard/SideBar"

import styles from "../_components/dashboard/Dashboard.module.css";

export default function Layout({ children }) {

  return (
  <>
    <SideBar />

    <Container className={`${styles.content} jcs`}>
      <Header />
      <main className={`${styles.main}`}>
        {children}
      </main>
    </Container>
  </>
  )
}
