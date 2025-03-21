import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import { Outlet } from "react-router-dom"


const PublicLayout = () => {
  return (
    <div className="w-full">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PublicLayout