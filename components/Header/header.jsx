//next
import Image from "next/image";
//style
import styles from "./header.module.scss";

//react-icons
import {MdPowerSettingsNew} from "react-icons/md";
import {RiUserSettingsFill} from "react-icons/ri";


//components
import Login from "../Login/login";
import { useState } from "react";
import Register from "../Register/register";

const Header  = () => {
    const [openLogin , setOpenLogin ] = useState(false);
    const [openRegister , setOpenRegister] = useState(false);

    return (
        <div className={styles.hero}>
            <div className={styles.logo}>
                <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                <h3>ALENSAO</h3>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.info} onClick={()=> setOpenRegister(true)}>
                     <RiUserSettingsFill className={styles.icon}></RiUserSettingsFill>
                     <p>s'inscrire</p>
                </div>
                 <div className={styles.info} style={{marginLeft:"10px"}} onClick={()=> setOpenLogin(true)}>
                    <MdPowerSettingsNew className={styles.icon}></MdPowerSettingsNew>
                    <p>Se connecter</p>
                </div>
            </div>
            <Login open={openLogin} setOpen={setOpenLogin}></Login>
            <Register open={openRegister} setOpen={setOpenRegister}></Register>
        </div>
    )
};

export default Header;