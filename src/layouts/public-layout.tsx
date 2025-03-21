import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import AuthHandler from "@/handlers/auth-handler"
import { Outlet } from "react-router-dom"


const PublicLayout = () => {
  return (
    <div className="w-full">
         <AuthHandler/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PublicLayout