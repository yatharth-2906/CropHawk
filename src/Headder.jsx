import { Link } from "react-router-dom";

function Headder(){
    return <>
    <nav className="nav_bar">
            <div className="nav_btn_container">
                <button className="dropbtn">≡</button>
            <div className="dropdown-content">
                <Link to="/news" >News</Link>
                <Link to="/fert_rec">Recommendation</Link>
                <Link to="/soil_health_monitoring">Monitoring</Link>
            </div>
        </div>

        <div className="nav-content">
            <Link to="/news">News</Link>
            <Link to="/fert_rec">Recommendation</Link>
            <Link to="/soil_health_monitoring">Monitoring</Link>
        </div>

        <div className="logo_img_container">
            {/* <img className="logo_img" src="" alt="LOGO" /> */}
            <Link to="/"><h1 className="logo_text">CropHawk</h1></Link>
        </div>

        <div className="sign_up_btn_container" >
            <Link className="sign_up_btn btn_transition" to="/login">Login</Link>
            <Link className="sign_up_btn btn_transition sign_out" to="/">Sign Out</Link> 
        </div>
    </nav>
</>
}

export default Headder;