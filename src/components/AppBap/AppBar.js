import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu'
import './style.scss'

const AppBar = ({ isAuthenticated }) => (
        <header>
                <nav className="Nav" >
                        {/* <Navigation /> */}

                        {true && <Navigation />}

                        {isAuthenticated ? <UserMenu /> : <AuthNav />}
                </nav>
        </header>

)
export default AppBar