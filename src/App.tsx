import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import PublicLayout from './layouts/public-layout'
import HomePage from './routes/homepage'
import AboutPage from './routes/aboutpage'
import AuthenticationLayout from './layouts/auth-layout'
import SignInPage from './routes/sign-in'
import SignUpPage from './routes/sign-up'
import ProtectedRoutes from './layouts/protected-routes'
import MainLayout from './layouts/main-layout'


function App() {
  return (
    <Router>
      <Routes>
        {/* public lyout */}
        <Route element={<PublicLayout/>}>
        <Route index  element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        </Route>
        
        {/* authentication layout */}
        <Route element={<AuthenticationLayout/>}>
        <Route path="/signin"  element={<SignInPage/>}/>
        <Route path="/signup"  element={<SignUpPage/>}/>
        
        </Route>
        
        {/* protected layout */}
        <Route element={<ProtectedRoutes ><MainLayout/></ProtectedRoutes>}></Route>
      </Routes>
    </Router>
  )
}

export default App