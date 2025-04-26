import Container from "../_components/Container";
import Header from "../_components/dashboard/Header"
import SideBar from "../_components/dashboard/SideBar"

import './dashboard.css';

export default function Layout({ children }) {
  return (
  <>
    <SideBar />

    <Container className="content jcs">
      <Header />
      <main>
        {children}
      </main>
    </Container>
  </>
  )
}
