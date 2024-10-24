import { Link } from 'react-router-dom'

function NavItem () {
    return (
        <div className="menu">
            <Link to = {'/'}>Home</Link>
            <Link to = {'/about'}>About</Link>
            <Link to = {'/contact'}>Contact</Link>
        </div>
    )
}
export default NavItem