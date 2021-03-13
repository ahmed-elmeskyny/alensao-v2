//react
import {useState} from "react";


//styles
import styles from "./layout.module.scss";

//components
import Menu from "../Menu/Menu";
import Header from "../Header/header";
import Footer from "../Footer/footer";

import {HiMenuAlt1} from "react-icons/hi"



const Layout = (props) => {
    const [width , setwidth] = useState("0%");

    return (
        <div className={styles.container}> 
             <Header setOpenLogin={props.setOpenLogin} setOpenRegister={props.setOpenRegister}></Header>          
             <Menu width={width} setwidth={setwidth}></Menu> 
             <div className={styles.menu}>
                <HiMenuAlt1 onClick={()=> setwidth("100%")}></HiMenuAlt1>
            </div>
             {props.children}
             <Footer></Footer>
        </div>
    )
};


export default Layout;