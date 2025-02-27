import { Link } from "react-router-dom";

function Footter(){
    return <>
    <div id="footer">
        <div className="logo_img_container">
            {/* <img className="logo_img" src="" alt="LOGO" /> */}
            <h1 className="logo_text">CropHawk</h1>
        </div>

        <br />

        <div className="footer_div">
            <div className="footer_actions">
                <a href="#brand_desc">About Us</a>
                <a href="#soil_health">Services</a>
                <a href="#rev">Solutions</a>
                <a href="/#form_section">Contact Us</a>
                <Link to="/faq">FAQ</Link>
            </div>
        </div>

        <br />

        <div className="footer_line_container">
            <hr className="footer_line" />
        </div> 
        
        <br />

        <div className="footer_rem">
            <div className="copyright">© 2025 CropHawk. All rights reserved.</div>
            <div className="policies">
                <Link to="/faq">Privacy Policy</Link>
                <Link to="/faq">Terms and Conditions</Link>
                <Link to="/faq">Cookie Policy</Link>
            </div>
        </div>
    </div>
    </>
}

export default Footter;