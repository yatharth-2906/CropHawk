import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineInsights } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";

function HomePage(){
    return <>
    <main>
        <img id="brand_desc" className="brand_img" src="./src/assets/home_bg.jpg" alt="Brand Image" />
        <section className="brand_desc">
            <div className="brand_desc_heading">
                <h1>Revolutionizing Agriculture with Drone Technology Solutions</h1>
            </div>

            <div className="brand_para">
                <div className="brand_para1">CropHawk utilizes drone technology to address agricultural challenges, providing innovative solutions for soil health monitoring, fertilizer recommendation, and efficient fertilizer spraying.</div>

                <div className="brand_para2">
                    <a className="learn_more_btn btn_transition" href="#">Learn More</a>
                    <a className="sign_up_btn_contrast btn_transition" href="#">Sign Up</a>
                    <a className="sign_up_btn_contrast btn_transition sign_out">Sign Out</a>
                </div>
            </div>
        </section>

        <br /><br /><br /><br />   

        <section className="soil_health" id="soil_health">
            <div className="soil_health_text">
                <div className="soil_health_heading">
                    <h2>Revolutionizing Soil Health Monitoring with Advanced Drone Technology</h2>
                </div>

                <div className="soil_health_para">
                    At CropHawk, we employ cutting-edge drone technology to monitor soil health in a way that has never been done before. Our innovative approach allows us to gather accurate data and provide valuable insights to farmers.
                </div>

                <br />

                <div>
                    <ul className="soil_health_list">
                        <li> <FaDatabase className="icons_list"/> 
                        Accurate Data Collection</li> 
                        <li> <GiFarmer className="icons_list"/>
                        Valuable Insights for Farmers</li>
                        <li> <MdOutlineInsights className="icons_list" />
                        Efficient Soil Management Solutions</li>
                    </ul>
                </div>
            </div>
            
            <div className="soil_health_img_container">
                <img className="soil_health_img" src="./src/assets/soil_health.jpg" alt="Soil health Image" />
            </div>
        </section>

        <br /><br /><br /><br />

        <section className="soil_health">
            <div className="soil_health_text">
                <div className="soil_health_heading">
                    <h2>Precise Recommendations for Optimal Fertilization</h2>
                </div>

                <div className="soil_health_para">CropHawk's advanced data analysis enables accurate fertilizer recommendations, maximizing crop yield and minimizing waste. With our innovative technology, farmers can achieve optimal fertilization for healthier plants and increased profitability.</div>

                <br />

                <div className="soil_health_para_btn">
                    <Link className="learn_more_btn_contrast btn_transition" to="/learn_more">Learn More</Link>
                    <Link className="learn_more_btn btn_transition" to="/fert_rec">Recommendation</Link>
                </div>
            </div>
            
            <div className="soil_health_img_container">
                <img className="soil_health_img" src="./src/assets/fertilizer_recommendation.jpg" alt="Soil health Image" />
            </div>
        </section>

        <br /><br /><br /><br />

        <section className="soil_health">
            <div className="soil_health_text">
                <div className="soil_health_heading">
                    <h2>Efficient Fertilizer Spraying System for Higher Yields</h2>
                </div>

                <div className="soil_health_para">CropHawk's innovative fertilizer spraying system increases crop yields while reducing waste. Our advanced drone technology ensures precise and efficient application, optimizing the use of fertilizers for maximum effectiveness.</div>

                <br />

                <div className="soil_health_para_btn">
                    <Link className="learn_more_btn_contrast btn_transition" to="/learn_more">Learn More</Link>
                    <Link className="learn_more_btn btn_transition" to="/soil_health_monitoring">Monitoring</Link>
                </div>
            </div>
            
            <div className="soil_health_img_container">
                <img className="soil_health_img" src="./src/assets/efficient_spraying.jpg" alt="Soil health Image" />
            </div>
        </section>

        <br /><br /><br /><br />

        <section className="rev" id="rev">
            <div>
                <h1 className="rev_heading">Transforming Agriculture Through Drone Technology</h1>
            </div>

            <p className="rev_para">CropHawk's services begin with the deployment of advanced drones equipped with cutting edge sensors. These drones collect data on soil health, crop growth, and other vital parameters.</p>
        </section>

        <br /><br /><br /><br />

        <section className="services">
                <div className="services_element">
                    <img className="services_img" src="./src/assets/box_3d.svg" alt="" />

                    <div className="services_head">Data-Driven Insights for Optimal Crop Management</div>

                    <div className="services_para">Our team of agronomists and data scientists analyze the collected data to provide actionable insights for farmers.</div>
                </div>

                <br /><br />

                <div className="services_element">
                    <img className=" services_img" src="./src/assets/box_3d.svg" alt="" />

                    <div className="services_head">Efficient Fertilizer Recommendation for Maximum Yield</div>

                    <div className="services_para">Based on the data analysis, CropHawk recommends the most suitable fertilizer for each specific crop.</div>
                </div>

                <br /><br />

                <div className="services_element">
                    <img className=" services_img" src="./src/assets/box_3d.svg" alt="" />

                    <div className="services_head">Precision Fertilizer for Optimal Nutrient Distribution</div>

                    <div className="services_para">CropHawk ensures precise and efficient application of fertilizers, minimizing waste and maximizing crop health.</div>
                </div>
        </section>

        <div className="brand_para2">
            <Link className="learn_more_btn btn_transition" to="/learn_more">Learn More</Link>
            <Link className="learn_more_btn_contrast btn_transition" to="/sign_up">Sign Up</Link>
            <Link className="learn_more_btn_contrast btn_transition  sign_out" to="/">Sign Out</Link>
        </div>

        <br /><br />

        <section className="form_section" id="form_section">
            <h1 className="form_heading">Contact Us</h1>
            <p className="form_para">Feel free to reach out to us at CropHawk! Our dedicated team is here to assist you. Whether you have questions, feedback, or inquiries, we're eager to hear from you.</p>

            <div className="form_div">
                <div className="details">
                    <div className="details-item">
                        <div className="details-icon">
                        <i><FaHome /></i>
                        </div>
                        
                        <div className="details-content">
                          <h4 className="form_detail_heading">Address</h4>
                          <p className="form_para">4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
                        </div>
                      </div>

                      <div className="details-item">
                        <div className="details-icon">
                        <i><FaPhone /></i>
                        </div>
                        
                        <div className="details-content">
                          <h4 className="form_detail_heading">Phone</h4>
                          <p className="form_para">+91 XX XXXX XXXX</p>
                        </div>
                      </div>

                      <div className="details-item">
                        <div className="details-icon">
                        <i><MdEmail /></i>
                        </div>
                        
                        <div className="details-content">
                          <h4 className="form_detail_heading">Email</h4>
                          <p className="form_para">crophawk@gmail.com</p>
                        </div>
                      </div>
                </div>

                <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
                    <input type="hidden" name="access_key" value="7a472bdd-13cd-46ad-9d27-defa5ba4f0e8" />

                    <h2 className="form_heading">Send Message</h2>

                    <div className="inputt_container">
                        <input className="inputt" type="text" required= {true} placeholder="Name" name="name" />
                    </div>
                    <div className="inputt_container">
                        <input className="inputt" type="email" required= {true} placeholder="Email" name="email" />
                    </div>
                    <div className="form-textarea-container">
                        <textarea id="form-textarea" placeholder="Your Message" name="message"></textarea>
                    </div>
                    
                    <br />
                    <button className="submit_btn btn_transition" type="submit">Submit</button>
                  </form>
            </div>
        </section>
    </main>
    </>
}

export default HomePage;