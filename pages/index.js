import Head from 'next/head';
import {useState} from "react"


//style 
import styles from "../styles/Home.module.scss";

//components
import Layout from "../components/Layout/layout";
import Slider from "../components/Slider/slider";




//redux
import {connect} from "react-redux";
import {setCurrentUser} from "../redux/uerReducer/user-action";

function  Home(props) {
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);


  
  return (
    <div >
      <Head>
        <title>Alensao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout 
        openLogin={openLogin}
        setOpenLogin={setOpenLogin} 
        setOpenRegister={setOpenRegister} 
        openRegister={openRegister}
        >
        <Slider></Slider>
        <div className={styles.speachContainer}>
          <h1>Mot du Président d' ALENSAO  </h1>
          <div className={styles.mot}>   
              <div className={styles.img}></div>
              <p>Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

        </div>
      </Layout>

    </div>
  )
};


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user )=> dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(Home);