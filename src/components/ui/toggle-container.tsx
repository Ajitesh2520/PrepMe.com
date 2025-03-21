import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavigationRoutes from "./navigation-routes"
import { useAuth } from "@clerk/clerk-react"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
  

const ToggleContainer = () => {
    const {userId} =useAuth()
  return (
    
    <Sheet>
  <SheetTrigger className="blocked md:hidden"><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle/>
      
    </SheetHeader>
    <nav className="gap-3 flex flex-col items-start">
    <NavigationRoutes isMobile></NavigationRoutes>
          {userId && (
            <NavLink 
           
            to={"/generate"}
            className={({isActive})=>
                cn(
                    "text-base text-neutral-600 mt-6",
                isActive && "text-neutral-900 font0semibold"
            )
        }>
            Take An Interview
        </NavLink>
          )}
    </nav>
  </SheetContent>
</Sheet>

  )
}

export default ToggleContainer