//next
import Image from "next/image";
import { useState } from "react";

//style
import styles from "./login.module.scss";

//react-hook-form
import {useForm} from "react-hook-form";

//firebase
import {auth} from "../../config/utils";

//react-icons
import {MdPowerSettingsNew} from "react-icons/md";
import {TiDelete} from "react-icons/ti";
import {AiFillEye} from "react-icons/ai";
import {AiOutlineEyeInvisible} from "react-icons/ai";

//Loader
import{Loader}from "../Loader/Loader";

//components
import Notification from "../Notification/notification";


const Login = ({open , setOpen}) => {
    const {register , handleSubmit , errors } = useForm();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [loader , isLoader]= useState(false);
    const [message , setMessage]= useState(false);
    const [erreur , setErreur]=useState(false);
    const [type , setType] = useState("password");

    const [notif , setNotif]= useState(false);
    
    const Submit = async(data) => {
        isLoader(true);
        setErreur(false);
        console.log(data);

            await auth.signInWithEmailAndPassword(data.email,data.password).then(
                ()=> {
                    setMessage("Vous etes connecte");
                    setNotif(true);
                    setEmail("");
                    setPassword("");
                    setOpen(false);
                    setTimeout(() => setNotif(false), 4000);  
                    isLoader(false);  
                }
            ).catch(
                
                    (error)=> {
                        setErreur(true)
                        setMessage(error.message)
                        setNotif(true);
                        isLoader(false);
                        setTimeout(
                            ()=> {
                                setNotif(false);
                            },8000
                        )
        
                    }
                
            )

    }


    return (
        <>
     {notif ? <Notification erreur={erreur}> {message}</Notification>: null}
     { open  ? <div className={styles.loginFormContainer} >
            <div className={styles.filter}>
                <div className={styles.logo}>
                    <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                    <h3>ALENSAO</h3>
                    <TiDelete className={styles.icon} onClick={()=> setOpen(false)}></TiDelete>
                </div>
                {loader?<Loader></Loader> :<><form onSubmit={handleSubmit(Submit)} autoComplete="off" >
                     <label>E-mail</label>
                     <input 
                       name="email" 
                       type="email" 
                       placeholder="email"
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                       ref={register({ required : true})}
                     />
                     <label>Mot de passe</label>
                     <div  className={styles.password}>
                      <input 
                       name="password" 
                       type={type}
                       placeholder="mot de passe..."
                       value={password}
                       onChange={(e)=> setPassword(e.target.value)}
                       ref={register({required : true})}
                     />
                     { type == "password" ?<AiFillEye className={styles.icon} onClick={()=> setType("text")}></AiFillEye>: <AiOutlineEyeInvisible className={styles.icon} onClick={()=> setType("password")}></AiOutlineEyeInvisible>}
                     </div>
                     <button type="submit" className={email.length  <= 0 || password.length <= 0 ? null : styles.enabled} disabled={email.length  <= 0 || password.length <= 0 ? true: false}><MdPowerSettingsNew style={{fontSize:"20px", marginRight:"5px"}}></MdPowerSettingsNew>Se Connecter </button>
                </form>
                <div className={styles.reset}>
                    <a>Mot de passe Oublier ?</a>
                </div></>}
            </div>
        </div> : null}
        </>
    )
    
};
export default Login;