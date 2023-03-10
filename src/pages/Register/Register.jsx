import "./Register.scss"
import { FacebookButton, GoogleButton, AppleButton, EmailButton } from "../../components/Login/"
import { loginContext } from "../../Context/LoginContext.jsx"
import { useContext, useRef, useEffect } from "react";
import FormikContainer from "../../components/Register/NewRegister/FormikContainer"

export default function Register(){

    // Disable Modal by clicking outside............
    const { register, setRegister } = useContext(loginContext)

    let menuRef = useRef()

    useEffect(() => {
        const closeModal=(e)=>{
            const registerElement = document.querySelector(".Register");
            if(!registerElement.contains(e.target)) setRegister(false)
        }
        document.addEventListener("mousedown", closeModal)
        return ()=>{
            document.removeEventListener("mousedown",closeModal);
        }
    })
    ////////////////////////////////////////////////////


    return(
        <div className="Register" ref={menuRef}>
            <div className="xAndLogIn">
                <div onClick={ e => setRegister(!register) } id="X">X</div>
                <div>Register</div>
            </div>

            <div className="WelcomeToNest">Welcome to NEST</div>
            
            <div className="selectHostAndUser"> 
               {/*  <HostOrUser /> */}
            </div>
            
            <div className="userNameAndPassword">
                {/* <InputRegister /> */}
                <FormikContainer />
            </div>
            
            <div className="buttonFacebook">
                <FacebookButton />
            </div>

            <div className="buttonGoogle">
                <GoogleButton />
            </div>

            <div className="buttonApple">
                <AppleButton />
            </div>
            
            <div className="buttonEmail">
                <EmailButton />
            </div>
        </div>
    )

}