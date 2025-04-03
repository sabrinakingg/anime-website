import { Outlet } from "react-router-dom"

// import pages
import Header from "./Header"
import Footer from "./Footer"

function Layout(props) {
  return (
    <div className="app">
      {/* import header */}
      <Header />
      <div>
        <Outlet/>
      </div>
      {/* import footer */}
      <Footer />

    </div>
  )
}

export default Layout