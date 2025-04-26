import Header from "../_components/dashboard/Header"
import SideBar from "../_components/dashboard/SideBar"

export default function Layout({ children }) {
  return (
  <>
    <SideBar />

    <section class="content">
      <Header />
      <main>
        {children}
      </main>
    </section>
  </>
  )
}
