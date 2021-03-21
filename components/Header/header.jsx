//next
import Image from "next/image";
import { useRouter} from "next/router";
//style
import styles from "./header.module.scss";

//react-icons
import {MdPowerSettingsNew} from "react-icons/md";
import {RiUserSettingsFill} from "react-icons/ri";
import {BsFillPersonFill} from "react-icons/bs";
import {BsBoxArrowRight} from "react-icons/bs";

//firebase
import {auth } from "../../config/utils";

//redux
import {connect } from "react-redux";


const Header  = ({setOpenLogin , setOpenRegister , user  }) => {
    const router = useRouter()


    return (
        <div className={styles.hero}>
            <div className={styles.logo}>
                <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                <h3>ALENSAO</h3>
            </div>
            <div className={styles.infoContainer}>
              {  user ?
                <>
                <div className={styles.info} onClick={()=> router.push("/myspace")}>
                     <BsFillPersonFill className={styles.icon}></BsFillPersonFill>
                     <p>Espace Lauréat</p>
                </div>
                <div className={styles.info} onClick={()=> {auth.signOut(); router.push("/") }}>
                     <BsBoxArrowRight className={styles.icon}></BsBoxArrowRight>
                     <p>se deconnecter</p>
                </div>
                </>:
                <>
                <div className={styles.info} onClick={()=> setOpenRegister(true)}>
                    <RiUserSettingsFill className={styles.icon}></RiUserSettingsFill>
                     <p>s'inscrire</p>
                </div>
                <div className={styles.info} style={{marginLeft:"10px"}} onClick={()=> setOpenLogin(true)}>
                    <MdPowerSettingsNew className={styles.icon}></MdPowerSettingsNew>
                    <p>Se connecter</p>
                </div>
                </>
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    user : state.user.CurrentUser,
})
export default connect(mapStateToProps)(Header); 