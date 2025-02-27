import { FcGoogle } from "react-icons/fc";
import styles from './Auth.module.css';

function LoginPage(){
    return <>
    <div className={styles.login_body}>
        <div className={styles.login_main}>
        <div className={styles.login_img}>
        </div>  
        <div className={styles.form_container}>
            <form id={styles.login_form}>
                <h1 className={styles.form_heading}>Welcome Back</h1>
                <p className={styles.form_para}>Enter Your Credentials To Login</p>

                <br /><br />
                <div className={styles.inputt_container}>
                    <input className={styles.inputt} type="email" required= {true} placeholder="Email ID" name="email" id="femail" />
                </div>

                <br />
                <div className={styles.inputt_container}>
                    <input className={styles.inputt} type="password" required= {true} placeholder="Password" name="password" id="fpassword" />
                </div>
                
                <br />
                <button className={styles.sign_up_btn} type="submit">Login</button>

                <div>
                    <p className={styles.form_para}>--------------------or--------------------</p>
                </div>
                
                <br />
                <button className={styles.google_btn} type="submit"><FcGoogle className={styles.google_icon}/>  Login With Google</button>


                <br /><br />
                <p className={styles.form_para_2}>Don't you have an account? <a style={{color: "purple"}} >Sign Up</a></p>
            </form>
        </div>
        </div>
    </div>
    </>
}

export default LoginPage;