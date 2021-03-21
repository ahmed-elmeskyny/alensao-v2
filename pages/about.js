import Head from 'next/head';
import Image from "next/image"
import {useEffect , useState} from "react";

//styles 
import styles from "../styles/aboutus.module.scss";

//components
import Layout from "../components/Layout/layout";
import AboutDynamic from "../components/about/about";
import Tree from '../components/tree/tree';


//redux
import {connect} from "react-redux";
import {setCurrentUser} from "../redux/uerReducer/user-action";



function About() {
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  return (
    <div >
      <Head>
        <title>Alensao || A propos</title>
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
             <h1> A Propos d' AlENSAO </h1>
             <p>Acceuil / alensao </p>
          </div>
        </div>
        <AboutDynamic title="à propos" img="/logo.png"  width="350px" height="200px"></AboutDynamic>
        <AboutDynamic isInverse title="notre mission" img="/mission.png" width="220px" height="200px" ></AboutDynamic>

      </Layout>

    </div>
  )
}



const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user )=> dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(About);