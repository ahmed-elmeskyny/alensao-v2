//next - react
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Router from "next/router";

//style
import styles from "./Menu.module.scss";

//components
import ActiveLink from "../ActiveLink/activeLink";

//react-icons
import { RiDashboardFill } from "react-icons/ri";
import { FaFire } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { BiGroup } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsBookmarks } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiFillCreditCard } from "react-icons/ai";

//nprogress
import NProgress from "nprogress";

const SideMenu = ({ width, setwidth }) => {
  const [Fixed, setFixed] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
        ></link>
      </Head>
      <div className={Fixed ? styles.fixedMenuContainer : styles.menuContainer}>
        <ul>
          <li>
            <ActiveLink href="/" activeClassName={styles.activeLink}>
              <a className={styles.acceuil}>
                <RiDashboardFill
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></RiDashboardFill>
                Accueil
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about" activeClassName={styles.activeLink}>
              <a className={styles.about} onClick={() => setwidth("0%")}>
                <FaFire
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></FaFire>
                ALENSAO
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/ad-hoc" activeClassName={styles.activeLink}>
              <a className={styles.faq} onClick={() => setwidth("0%")}>
                <BiGroup
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></BiGroup>
                Ad-hoc
              </a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href="/stage" activeClassName={styles.activeLink}>
              <a className={styles.blog}>
                <MdEventNote
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></MdEventNote>{" "}
                Stages & Emplois{" "}
              </a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href="/galerie" activeClassName={styles.activeLink}>
              <a className={styles.space} onClick={() => setwidth("0%")}>
                <HiOutlinePhotograph
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></HiOutlinePhotograph>{" "}
                Galerie{" "}
              </a>
            </ActiveLink>
          </li>
          <li style={{ position: "relative" }}>
            <a
              onClick={() => {
                setToggle1(!toggle1);
                if (toggle2) {
                  setToggle2(!toggle2);
                }
              }}
              style={toggle1 ? { color: "#0c97b4" } : null}
            >
              Podcast{" "}
              <RiArrowDownSLine
                style={{ fontSize: "23px", marginLeft: "5px" }}
              ></RiArrowDownSLine>
            </a>
            {toggle1 ? (
              <div className={styles.submenu}>
                <ActiveLink
                  href="/emission"
                  activeClassName={styles.activeLink}
                >
                  <a className={styles.faq} onClick={() => setwidth("0%")}>
                    <CgScreen
                      style={{ fontSize: "23px", marginRight: "5px" }}
                    ></CgScreen>
                    K-LAM 2.0
                  </a>
                </ActiveLink>
                <ActiveLink
                  href="/ensaoiste"
                  activeClassName={styles.activeLink}
                >
                  <a className={styles.contact}>
                    <BiWorld
                      style={{ fontSize: "23px", marginRight: "5px" }}
                    ></BiWorld>
                    Ensaoistes du monde
                  </a>
                </ActiveLink>
              </div>
            ) : null}
          </li>

          <li>
            <ActiveLink href="/unicard" activeClassName={styles.activeLink}>
              <a className={styles.space} onClick={() => setwidth("0%")}>
                <AiFillCreditCard
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></AiFillCreditCard>{" "}
                UniCard{" "}
              </a>
            </ActiveLink>
          </li>
          {/* <li style={{ position: "relative" }}>
            <a
              onClick={() => {
                setToggle2(!toggle2);
                if (toggle1) {
                  setToggle1(!toggle1);
                }
              }}
              style={toggle2 ? { color: "#0c97b4" } : null}
            >
              MyEnsao
              <RiArrowDownSLine
                style={{ fontSize: "23px", marginLeft: "5px" }}
              ></RiArrowDownSLine>
              {toggle2 ? (
                <div className={styles.submenu}>
                  <ActiveLink
                    href="/unicard"
                    activeClassName={styles.activeLink}
                  >
                    <a className={styles.contact}>
                      <BiWorld
                        style={{ fontSize: "23px", marginRight: "5px" }}
                      ></BiWorld>
                      Convention
                    </a>
                  </ActiveLink>
                </div>
              ) : null}
            </a>
          </li> */}

          {/* <li>
            <ActiveLink href="/emission" activeClassName={styles.activeLink}>
              <a className={styles.faq} onClick={() => setwidth("0%")}>
                <CgScreen
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></CgScreen>
                K-LAM 2.0
              </a>
            </ActiveLink>
          </li> */}
          {/* <li>
            <ActiveLink href="/ensaoiste" activeClassName={styles.activeLink}>
              <a className={styles.contact}>
                <BiWorld
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></BiWorld>
                Ensaoistes du monde
              </a>
            </ActiveLink>
          </li> */}
          <li>
            <ActiveLink href="/magensao" activeClassName={styles.activeLink}>
              <a className={styles.faq}>
                <BsBookmarks
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></BsBookmarks>{" "}
                MagEnsao
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/contactez-nous"
              activeClassName={styles.activeLink}
            >
              <a className={styles.contact}>
                <MdPermContactCalendar
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></MdPermContactCalendar>
                Contactez-nous
              </a>
            </ActiveLink>
          </li>
        </ul>
        <div className={styles.social}>
          <a
            href="https://web.facebook.com/Association.ALENSAO?_rdc=1&_rdr"
            target="_blank"
          >
            {" "}
            <FaFacebookSquare
              className={styles.icon}
              style={{ color: "#1877F2" }}
            ></FaFacebookSquare>
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

      {/* mobile menu */}

      <div className={styles.filter} style={{ width: width }}>
        <div className={styles.mobileMenu}>
          <RiDeleteBack2Fill
            className={styles.iconDelete}
            onClick={() => setwidth("0%")}
          ></RiDeleteBack2Fill>
          <ul>
            <li>
              <ActiveLink href="/" activeClassName={styles.activeLink}>
                <a className={styles.acceuil} onClick={() => setwidth("0%")}>
                  <RiDashboardFill
                    style={{ fontSize: "23px", marginRight: "5px" }}
                  ></RiDashboardFill>
                  Accueil
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about" activeClassName={styles.activeLink}>
                <a className={styles.about} onClick={() => setwidth("0%")}>
                  <FaFire
                    style={{ fontSize: "23px", marginRight: "5px" }}
                  ></FaFire>
                  ALENSAO
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/ad-hoc" activeClassName={styles.activeLink}>
                <a className={styles.faq} onClick={() => setwidth("0%")}>
                  <BiGroup
                    style={{ fontSize: "23px", marginRight: "5px" }}
                  ></BiGroup>
                  Comité Ad-hoc
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/stage" activeClassName={styles.activeLink}>
                <a className={styles.blog} onClick={() => setwidth("0%")}>
                  <MdEventNote
                    style={{ fontSize: "23px", marginRight: "5px" }}
                  ></MdEventNote>{" "}
                  Stages & Emplois{" "}
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/galerie" activeClassName={styles.activeLink}>
                <a className={styles.space} onClick={() => setwidth("0%")}>
                  <HiOutlinePhotograph
                    style={{ fontSize: "23px", marginRight: "5px" }}
                  ></HiOutlinePhotograph>{" "}
                  Galerie{" "}
                </a>
              </ActiveLink>
            </li>

            <li style={{ position: "relative" }}>
              <a
                onClick={() => {
                  setToggle1(!toggle1);
                  if (toggle2) {
                    setToggle2(!toggle2);
                  }
                }}
                style={toggle1 ? { color: "#0c97b4" } : null}
              >
                <RiArrowDownSLine
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></RiArrowDownSLine>
                Podcast{" "}
              </a>
              {toggle1 ? (
                <div style={{ marginLeft: "30px", fontSize: "15px" }}>
                  <ActiveLink
                    href="/emission"
                    activeClassName={styles.activeLink}
                  >
                    <a className={styles.faq} onClick={() => setwidth("0%")}>
                      <CgScreen
                        style={{ fontSize: "23px", marginRight: "5px" }}
                      ></CgScreen>
                      K-LAM 2.0
                    </a>
                  </ActiveLink>
                  <ActiveLink
                    href="/ensaoiste"
                    activeClassName={styles.activeLink}
                  >
                    <a className={styles.contact}>
                      <BiWorld
                        style={{ fontSize: "23px", marginRight: "5px" }}
                      ></BiWorld>
                      Ensaoistes du monde
                    </a>
                  </ActiveLink>
                </div>
              ) : null}
            </li>
            <li style={{ position: "relative" }}>
              <a
                onClick={() => {
                  setToggle2(!toggle2);
                  if (toggle1) {
                    setToggle1(!toggle1);
                  }
                }}
                style={toggle2 ? { color: "#0c97b4" } : null}
              >
                <RiArrowDownSLine
                  style={{ fontSize: "23px", marginRight: "5px" }}
                ></RiArrowDownSLine>
                MyEnsao
              </a>
              {toggle2 ? (
                <div style={{ marginLeft: "30px", fontSize: "15px" }}>
                  <ActiveLink
                    href="/myensao"
                    activeClassName={styles.activeLink}
                  >
                    <a className={styles.contact}>
                      <BiWorld
                        style={{ fontSize: "23px", marginRight: "5px" }}
                      ></BiWorld>
                      Convention
                    </a>
                  </ActiveLink>
                </div>
              ) : null}
            </li>
            {/* <li>
              <ActiveLink href="/emission" activeClassName={styles.activeLink}>
                <a className={styles.faq} onClick={() => setwidth("0%")}>
                  <CgScreen
                    style={{ fontSize: "23px", marginRight: "5px" }}
                  ></CgScreen>
                  K-LAM 2.0
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/ensaoiste" activeClassName={styles.activeLink}>
                <a className={styles.contact}>
                  <BiWorld
                    style={{ fontSize: "23px", marginRight: "5px" }}
                  ></BiWorld>
                  Ensaoistes du monde
                </a>
              </ActiveLink>
            </li> */}
            <li>
              <ActiveLink href="/magensao" activeClassName={styles.activeLink}>
                <a className={styles.faq}>
                  <BsBookmarks
                    style={{ fontSize: "23px", marginRight: "5px" }}
                  ></BsBookmarks>{" "}
                  MagEnsao
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/contactez-nous"
                activeClassName={styles.activeLink}
              >
                <a className={styles.contact} onClick={() => setwidth("0%")}>
                  <MdPermContactCalendar
                    style={{ fontSize: "23px", marginRight: "5px" }}
                  ></MdPermContactCalendar>
                  Contactez-nous
                </a>
              </ActiveLink>
            </li>
          </ul>
          <div>
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
            <div className={styles.copyRight}>
              <p>
                <FaRegCopyright className={styles.icon}></FaRegCopyright>
                Copyright 2021 Alensao. All rights reserved{" "}
              </p>
              <p>
                Crée par <span>Ahmed El meskyny</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
