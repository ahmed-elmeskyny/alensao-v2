import Head from 'next/head';
import {useState} from "react";
//styles 
import styles from "../styles/contact.module.scss";

//components
import Layout from "../components/Layout/layout";
import Notification from "../components/Notification/notification";

//react-icons
import {HiOutlineMailOpen} from "react-icons/hi";
import {FaPhoneAlt} from "react-icons/fa";

//react-hook-form
import {useForm} from "react-hook-form";


//email.js
import emailjs from "emailjs-com";

export default function About() {

  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);
  const [notif , setNotif] = useState(false);
  const [message , setMessage]= useState("");
  const [erreur , setErreur]=useState(false);

  const {register , handleSubmit  } = useForm();


  const Submit = (data,e) => {

    console.log(data)
    emailjs.send('service_vbdzu7n', 'contact',{ name : data.name, email:data.email,objet:data.objet,phone:data.phone,message:data.message,},"user_AgjG8swIUnDoTMoSmrZj6")
    .then((res) => {
        console.log(res.text);
        setMessage("envoyée");
        setNotif(true);
    }, (error) => {
        console.log(error.text);
        setMessage(error.text);
        setErreur(true);
        setNotif(true);
    });
    setTimeout(()=> setNotif(false), 4000);
    e.target.reset();
    
  }
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
           {notif ? <Notification erreur={erreur}>{message}</Notification>: null}
        <div className={styles.contactHeader}>
          <div className={styles.filter}>
             <h1> Contactez-nous</h1>
             <p>Accueil / Contactez-nous</p>
          </div>
        </div>
        <div className={styles.contactContainer}>
            <span>Contact</span>
            <h2>Contactez-nous</h2>
            <div className={styles.contactInfo}>
                <div className={styles.info}>
                    <HiOutlineMailOpen className={styles.icon}></HiOutlineMailOpen>
                    <div className={styles.text}>
                         <span>E-mail :</span>
                        <p>alensao.association@gmail.com</p>
                    </div>
                </div>
                
            </div>
            <div className={styles.contact}>
                <form onSubmit={ handleSubmit(Submit)} autoComplete="off">
                    <div className={styles.info}>
                       <input type="text" placeholder="votre nom complet" name="name"  ref={register({required : true})}/>
                       <input type="numbre" placeholder="telephone" name="phone"  ref={register({required : true})}/>
                    </div>
                    <div className={styles.email}>
                        <input type="email" placeholder="email" name="email" ref={register({required : true})}/>
                        <input type="text" placeholder="objet"  name="objet" ref={register({required : true})}/>
                    </div>
                    <textarea type="text" placeholder="Message" name="message" ref={register({required : true})} >
                    </textarea>
                    <button type="submit"> Envoyez </button>

                </form>
            </div>
        </div>

      </Layout>

    </div>
  )
}
