import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav'

const AppBar = () => (
     <header>
        <nav className="Nav" >
        <Navigation />
        <AuthNav/>
        </nav>
        </header>
   
)
export default AppBar