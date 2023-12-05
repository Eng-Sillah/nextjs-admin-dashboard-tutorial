import Sidebar from "../ui/dashboard/sidebar/sidebar"
import Navbar from "../ui/dashboard/navbar/navbar"
import Footer from "../ui/dashboard/footer/footer"
import style from "../ui/dashboard/dashboard.module.css"

function Layout( {children}) {
    return (
        <div className={style.container}>
            <div className={style.menu}>
                <Sidebar />
            </div>
            <div className={style.content}>
                <Navbar />
                {children}
                <Footer />
            </div>

        </div>
    )
}

export default Layout;