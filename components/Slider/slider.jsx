//next
import Link from "next/link";


//style
import styles from "./slider.module.scss";
import 'react-slideshow-image/dist/styles.css';

//components
import { Slide } from "react-slideshow-image";

//react-icons
import {AiOutlineRight} from "react-icons/ai";
import {AiOutlineLeft} from "react-icons/ai";
import {BsBoxArrowInRight} from "react-icons/bs";


const slides = [
    "/slide1.jpeg",
    "/slide2.jpeg",
    "/slide4.jpeg",
    "/slide5.jpeg",
    "/slide6.jpeg",
    "/rencontre9.JPG",
    "/slide10.jpeg"
]

const properties =  {
    prevArrow: <AiOutlineLeft className={styles.slideArrowLeft} style={{fontSize:"40px" ,color:"black", cursor:"pointer" , position:"absolute" , left:"0px", backgroundColor: " rgba(250,250,250,0.5 )" , borderRadius:"5px"}} ></AiOutlineLeft>,
    nextArrow: <AiOutlineRight className={styles.slideArrowRight} style={{fontSize:"40px" , color:"black", cursor:"pointer", position:"absolute" , right:"0px" ,  backgroundColor: " rgba(250,250,250,0.5 )" , borderRadius:"5px"}}></AiOutlineRight>,
    duration : 10000
}

const  Slider = () => {

    return (
            <Slide {...properties} >
            <div className={styles.eachSlide}>
                <div className={styles.slide} style={{backgroundImage: `url(${slides[0]})` , backgroundSize: "cover"  , backgroundPosition: "center", height:"100%"}}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                            <p>Pour un Meilleur Future</p>
                            <h1>Association Des Lauréats De l' ENSAO </h1>
                            <span>L'association des Lauréats de l'ENSAO se veut le lien entre les étudiants et les lauréats de l'école, à travers ses activités, ses partenariats et son vaste réseau de relations, elle facilite la transition du monde académique vers le monde du travail aux nouveaux lauréats.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.eachSlide}>
                <div className={styles.slide} style={{backgroundImage: `url(${slides[1]})` , backgroundSize: "cover", height:"100%" }}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                            <p>en vedette</p>
                             <h1>L'assise Entre L'Ade & L'ENSAO & Soft Innovation - Paris </h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores dolorem non quaerat ipsum rerum quos aliquam incidunt eos doloribus, qui molestiae nobis voluptatum voluptatibus, at vel porro aspernatur eveniet!</span>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className={styles.eachSlide}>
                <div className={styles.slide} style={{backgroundImage: `url(${slides[2]})` , backgroundSize: "100%",backgroundPosition: "center" , height:"100%" }}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                            {/* <p>en vedette</p>
                             <h1>L'assise Entre L'Ade & L'ENSAO & Soft Innovation - Paris </h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores dolorem non quaerat ipsum rerum quos aliquam incidunt eos doloribus, qui molestiae nobis voluptatum voluptatibus, at vel porro aspernatur eveniet!</span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.eachSlide}>
                <div className={styles.slide}  style={{backgroundImage: `url(${slides[3]})` , backgroundSize: "cover", height:"100%" ,backgroundPosition: "center"}}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                            {/* <p>en vedette</p>
                             <h1>L'assise Entre L'Ade & L'ENSAO & Soft Innovation - Paris </h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores dolorem non quaerat ipsum rerum quos aliquam incidunt eos doloribus, qui molestiae nobis voluptatum voluptatibus, at vel porro aspernatur eveniet!</span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.eachSlide}>
                <div className={styles.slide} style={{backgroundImage: `url(${slides[4]})` , backgroundSize: "cover", height:"100%" }}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                            {/* <p>en vedette</p>
                             <h1>L'assise Entre L'Ade & L'ENSAO & Soft Innovation - Paris </h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores dolorem non quaerat ipsum rerum quos aliquam incidunt eos doloribus, qui molestiae nobis voluptatum voluptatibus, at vel porro aspernatur eveniet!</span> */}
                        </div>
                    </div>
                </div>
            </div>
          
            <div className={styles.eachSlide}>
                <div className={styles.slide} style={{backgroundImage: `url(${slides[5]})` , backgroundSize: "cover",height:"100%" }}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                            {/* <p>en vedette</p>
                             <h1>L'assise Entre L'Ade & L'ENSAO & Soft Innovation - Paris </h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores dolorem non quaerat ipsum rerum quos aliquam incidunt eos doloribus, qui molestiae nobis voluptatum voluptatibus, at vel porro aspernatur eveniet!</span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.eachSlide}>
                <div className={styles.slide} style={{backgroundImage: `url(${slides[6]})` , backgroundSize: "cover",backgroundPosition:"center", height:"100%" }}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                            {/* <p>en vedette</p>
                             <h1>L'assise Entre L'Ade & L'ENSAO & Soft Innovation - Paris </h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores dolorem non quaerat ipsum rerum quos aliquam incidunt eos doloribus, qui molestiae nobis voluptatum voluptatibus, at vel porro aspernatur eveniet!</span> */}
                        </div>
                    </div>
                </div>
            </div>
           
        </Slide>
    )
};

export default Slider;