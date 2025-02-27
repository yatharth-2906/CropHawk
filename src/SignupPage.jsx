import { FcGoogle } from "react-icons/fc";
import styles from './Auth.module.css';

function SignupPage(){
    return <>
        <div className={styles.login_body}>
            <div className={styles.login_main}>  
            <div className={styles.form_container}>
                <form id={styles.login_form}>
                    <h1 className={styles.form_heading}>Sign Up To CropHawk</h1>
                    <p className={styles.form_para}>Sign Up to join our community</p>

                    <br />
                    <button className={styles.google_btn} type="submit"><FcGoogle className={styles.google_icon}/>  Login With Google</button>

                    <br />
                    <p className={styles.form_para}>--------------------or--------------------</p>

                    <br />
                    <div className={styles.inputt_container}>
                        <input className={styles.inputt} type="text" required= {true} placeholder="Name" name="name" id="fname" />
                    </div>

                    <br />
                    <div className={styles.inputt_container}>
                        <input className={styles.inputt} type="email" required= {true} placeholder="Email ID" name="email" id="femail" />
                    </div>
    
                    <br />
                    <div className={styles.inputt_container}>
                        <input className={styles.inputt} type="password" required= {true} placeholder="Password" name="password" id="fpassword" />
                    </div>

                    <br />
                    <div class={styles.checkbox_container}>
                        <input type="checkbox" required="true" />
                        <p class={styles.checkbox_para}>By Signing Up, you agree to our Terms & Conditions.</p>
                    </div>
                    
                    <br />
                    <button className={styles.sign_up_btn} type="submit">SIgn Up</button>
                    
                    <br />
                    <p className={styles.form_para_2}>Already a member? <a style={{color: "purple"}} >Sign Up</a></p>
                </form>
            </div>

            <div className={styles.login_img}>
            </div>

            </div>
        </div>
        </>
}

export default SignupPage;