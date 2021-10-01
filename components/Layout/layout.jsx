//react
import { useState } from "react";

//styles
import styles from "./layout.module.scss";

//components
import Menu from "../Menu/Menu";
import Header from "../Header/header";
import Footer from "../Footer/footer";

import { HiMenuAlt1 } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";

import Login from "../Login/login";
import Register from "../Register/register";

const Layout = (props) => {
  const [width, setwidth] = useState("0%");

  return (
    <div className={styles.container}>
      {/* <div className={styles.adsContainer}>
        <div className={styles.ads}>
          <img src="/pub.jpg"></img>
        </div>
      </div> */}
      <Header
        setOpenLogin={props.setOpenLogin}
        setOpenRegister={props.setOpenRegister}
      ></Header>
      <Menu width={width} setwidth={setwidth}></Menu>
      <div className={styles.menu}>
        <HiMenuAlt1 onClick={() => setwidth("100%")}></HiMenuAlt1>
        <div className={styles.social}>
          <a
            href="https://web.facebook.com/Association.ALENSAO?_rdc=1&_rdr"
            target="_blank"
          >
            {" "}
            <FaFacebookSquare className={styles.icon}></FaFacebookSquare>
          </a>
          <a href="mailto:alensao.association@gmail.com" target="_blank">
            {" "}
            <MdEmail
              className={styles.icon}
              style={{ fontSize: "22px" }}
            ></MdEmail>
          </a>
        </div>
      </div>
      {props.children}
      <Footer></Footer>
      <Login open={props.openLogin} setOpen={props.setOpenLogin}></Login>
      <Register
        open={props.openRegister}
        setOpen={props.setOpenRegister}
      ></Register>
    </div>
  );
};

export default Layout;
