//next
import Head from 'next/head';

//react
import { useState} from "react";

//styles 
import styles from "../styles/video.module.scss";

//components
import Layout from "../components/Layout/layout";






function About() {
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  return (
    <div >
      <Head>
        <title>Alensao || videothéque</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout 
        openLogin={openLogin}
        setOpenLogin={setOpenLogin} 
        setOpenRegister={setOpenRegister} 
        openRegister={openRegister}
        >
        <div className={styles.aboutHeader}>
          <div className={styles.filter}>
             <h1> Videothéque </h1>
             <p>Accueil / Videothéque </p>
          </div>
        </div>
        <h1 className={styles.title}><div></div>Videos<div></div></h1>
        <div className={styles.videosContainer}>
            <h1>Forum Ensao 2005</h1>
              <div className={styles.videos}>
                      <video src="/forumVideo1.mp4" width="300px" height="300px" controls style={{outline:"none", margin:"20px",marginTop:"10px"}}>
                      </video>
                      <video src="/forumVideo2.mp4" width="300px" height="300px" controls style={{outline:"none", margin:"20px",marginTop:"10px"}}>
                      </video>
                </div>

        </div>

      </Layout>

    </div>
  )
}




export default About;