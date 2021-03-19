//style
import styles from "./notification.module.scss";

//react-icons
import {BsPersonCheckFill} from "react-icons/bs";
import {AiOutlineUserDelete} from "react-icons/ai";



const Notification = ({ erreur , children }) => {


    return (
        <div className={erreur ? styles.erreur: styles.right}>
            {erreur?<AiOutlineUserDelete style={{marginRight:"10px",fontSize:"20px"}}></AiOutlineUserDelete> : <BsPersonCheckFill style={{marginRight:"10px",fontSize:"20px"}}></BsPersonCheckFill>}
            <p>{children}</p>
        </div>
    )

};

export default Notification;