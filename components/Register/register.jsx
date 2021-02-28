//next
import Image from "next/image";
import { useState } from "react";

//style
import styles from "./register.module.scss";

//react-hook-form
import {useForm} from "react-hook-form"


//react-icons
import {RiUserSettingsFill} from "react-icons/ri";
import {TiDelete} from "react-icons/ti";

const Register = ({open,setOpen}) => {
    const {register , handleSubmit , errors } = useForm();

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const Submit = (data) => {
        console.log(data)
        setEmail("");
        setPassword("");
        setOpen(false);
  
    }

    return (
        open? <div className={styles.registerFormContainer}>
            <div className={styles.filter}>
                <div className={styles.logo}>
                    <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                    <h3>ALENSAO</h3>
                    <TiDelete className={styles.icon} onClick={()=> setOpen(false)}></TiDelete>
                </div>
                <form onSubmit={handleSubmit(Submit)}>
                     <label>nom</label>
                     <input 
                       name="firstname" 
                       type="text" 
                       placeholder="nom"
                       ref={register({required : true})}
                     />
                     <label>Prenom</label>
                     <input 
                       name="lastname" 
                       type="text" 
                       placeholder="Prenom"
                       ref={register({ required : true})}
                     />
                      <label>age</label>
                      <input 
                       name="age" 
                       type="text" 
                       placeholder="votre age"
                       ref={register({ required : true})}
                     />
                     <label>Votre Domaine</label>
                      <input 
                       name="domaine" 
                       type="text" 
                       placeholder="génie informatique..."
                       ref={register({ required : true})}
                     />
                      <label>société de travail où liue de travail</label>
                      <input 
                       name="travail" 
                       type="text" 
                       placeholder="soft innovation...."
                       ref={register({ required : true})}
                     />
                     <label>email</label>
                     <input 
                       name="email" 
                       type="email" 
                       placeholder="email"
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                       ref={register({required : true})}
                     />
                     <label>Mot de passe</label>
                      <input 
                       name="password" 
                       type="password" 
                       placeholder="mot de passe"
                       value={password}
                       onChange={(e)=> setPassword(e.target.value)}
                       ref={register({required : true})}
                     />
                     <label>Confirmer voter mot de passe</label>
                      <input 
                       name="password" 
                       type="password" 
                       placeholder="password"
                       ref={register({ required : true})}
                     />
                     <button type="submit" className={email.length  <= 0 || password.length <= 0 ? null : styles.enabled} disabled={email.length  <= 0 || password.length <= 0 ? true: false}><RiUserSettingsFill style={{fontSize:"20px", marginRight:"5px"}}></RiUserSettingsFill>S'inscrire </button>
                </form>
            </div>
        </div> : null
    )
};

export default Register;