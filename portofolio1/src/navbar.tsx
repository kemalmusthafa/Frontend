import "./style.css"

function Navbar() {
    return (
    <div className="navbar bg-base-100 fixed z-50 justify-between px-20 box-border">
    <div className="">
     <a className="btn btn-ghost text-xl font-bold">SNCTRY. MSTH</a>
    </div>
    <div className="justify-end">
        <button className="btn btn-ghost text-xl font-medium">ABOUT</button>
        <button className="btn btn-ghost text-xl font-medium">STATS</button>
        <button className="btn btn-ghost text-xl font-medium">CONTACT</button>
    </div>
    </div>
    )
}
export default Navbar