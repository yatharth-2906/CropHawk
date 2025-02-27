import { useState } from "react";
import styles from "./Recommendations.module.css";
import ShowRecc from "./ShowRecc";
import Spinner from 'react-bootstrap/Spinner';

function FertRecPage() {
    const [getFert, setFert] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = "https://crophawk-api.onrender.com/";

    const predict = async () => {
        // Collect and validate inputs
        const inputs = {
            temperature: parseInt(document.getElementById("temperature").value, 10),
            humidity: parseInt(document.getElementById("humidity").value, 10),
            moisture: parseInt(document.getElementById("moisture").value, 10),
            soil_type: parseInt(document.getElementById("soil_type").value, 10),
            crop_type: parseInt(document.getElementById("crop_type").value, 10),
            nitrogen: parseInt(document.getElementById("nitrogen").value, 10),
            potassium: parseInt(document.getElementById("potassium").value, 10),
            phosphorous: parseInt(document.getElementById("phosphorous").value, 10),
        };

        if (Object.values(inputs).some((input) => isNaN(input))) {
            alert("Please provide valid input values.");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            if (loading) return (
                <div className={styles.loading_spinner_box}>
                  <Spinner className={styles.loading_spinner} animation="border"  variant="primary"/>
                </div>);

            const response = await fetch(`${API_URL}fertilizer_prediction`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`API error: ${errorMessage}`);
            }

            const result = await response.json();
            console.log("Prediction result:", result);

            setFert(result.prediction || "No prediction available"); // Handle unexpected response
        } catch (err) {
            console.error("Error during prediction:", err);
            setError("Failed to fetch prediction. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={styles.recc_body}>
                <div className={styles.recc_content}>
                    <br />
                    <center><h1>Fertilizer Recommendation For Crops</h1></center>
                    <br />

                    {/* Input fields */}
                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Temperature</p>
                        <input id="temperature" className={styles.input_value} type="number" min="0" max="100" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Humidity</p>
                        <input id="humidity" className={styles.input_value} type="number" min="0" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Moisture</p>
                        <input id="moisture" className={styles.input_value} type="number" min="0" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Soil Type</p>
                        <select className={styles.input_value} id="soil_type" name="soil_type">
                            <option value="0">Black</option>
                            <option value="1">Clayey</option>
                            <option value="2">Loamy</option>
                            <option value="3">Red</option>
                            <option value="4">Sandy</option>
                        </select>
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Crop Type</p>
                        <select className={styles.input_value} id="crop_type" name="crop_type">
                            <option value="0">Barley</option>
                            <option value="1">Cotton</option>
                            <option value="2">Ground Nuts</option>
                            <option value="3">Maize</option>
                            <option value="4">Millets</option>
                            <option value="5">Oil seeds</option>
                            <option value="6">Paddy</option>
                            <option value="7">Pulses</option>
                            <option value="8">Sugarcane</option>
                            <option value="9">Tobacco</option>
                            <option value="10">Wheat</option>
                            <option value="11">Coffee</option>
                            <option value="12">Kidney Beans</option>
                            <option value="13">Orange</option>
                            <option value="14">Pomegranate</option>
                            <option value="15">Rice</option>
                            <option value="16">Watermelon</option>
                        </select>
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Nitrogen</p>
                        <input id="nitrogen" className={styles.input_value} type="number" min="0" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Potassium</p>
                        <input id="potassium" className={styles.input_value} type="number" min="0" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Phosphorous</p>
                        <input id="phosphorous" className={styles.input_value} type="number" min="0" />
                    </div>

                    <br />
                    <button className="learn_more_btn btn_transition" onClick={predict} disabled={loading}>
                        {loading ? "Predicting..." : "Predict"}
                    </button>
                    <br />
                </div>
            </div>

            {error && <div className={styles.error}>{error}</div>}
            {getFert && <ShowRecc getFert={getFert} />}
        </>
    );
}

export default FertRecPage;
