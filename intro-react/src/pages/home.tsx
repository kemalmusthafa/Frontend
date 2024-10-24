import "./home.css";
import Button from "../components/button"
import gambar from "../assets/kemal.png"

function HomePage() {
    const str: string = "HELLO !"
    return (
        <div className="container">
            <div id="kotak1">
            <img src={gambar} alt="kemal"/>
            </div>
            <div id="kotak2">
                <h1>{str}</h1>
                <h2>私の名前は <span style={{color: "black"}}>KEMAL MUSTHAFA</span> です</h2>
                <h2>I am a student of Purwadhika Digital School. I am fast learner, capable, and web-tech enthusiast.</h2>
                <p><Button /></p>
            </div>
        </div>
    )
}
export default HomePage