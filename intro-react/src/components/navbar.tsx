import "./navbar.css"
import NavItem from "./navItem"
import logo from '../assets/dota2.png'

interface IProps {
    name : string 
}

function Navbar (props: IProps) {
    return (
        <div className="navbar">
            <div style={{flex : 1}}>
            <img src={logo} className="logo" alt="logo" />
            </div>
            <NavItem />
            <p style={{textAlign:'end'}}>Hello, {props.name} !</p>
        </div>
    )
}

export default Navbar