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
    "/alensao-banner.jpg",
    "/alensao-banner3.jpg",
    "/alensao-banner1.jpg",
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
                <div style={{backgroundImage: `url(${slides[1]})` , backgroundSize: "cover"  , backgroundPosition: "center", height:"100%"}}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                            <p>Pour un Meilleur Future</p>
                            <h1>Association des lauréats se l' ENSAO </h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores dolorem non quaerat ipsum rerum quos aliquam incidunt eos doloribus, qui molestiae nobis voluptatum voluptatibus, at vel porro aspernatur eveniet!</span>
                            <Link href="/about" ><a className={styles.about} > à propos <BsBoxArrowInRight></BsBoxArrowInRight> </a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.eachSlide}>
                <div  style={{backgroundImage: `url(${slides[0]})` , backgroundSize: "cover", height:"100%" }}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                            <p>en vedette</p>
                             <h1>l' assise entre l'Ade & l'ENSAO & Soft Innovation - paris </h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores dolorem non quaerat ipsum rerum quos aliquam incidunt eos doloribus, qui molestiae nobis voluptatum voluptatibus, at vel porro aspernatur eveniet!</span>
                            <Link href="/about" ><a className={styles.about} > Voir Plus ... <BsBoxArrowInRight></BsBoxArrowInRight> </a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.eachSlide}>
                <div  style={{backgroundImage: `url(${slides[2]})` , backgroundSize: "cover"  , height:"100%"}}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                        <p>Pour un Meilleur Future</p>
                            <h1>Association des lauréats se l' ENSAO </h1>
                            
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores dolorem non quaerat ipsum rerum quos aliquam incidunt eos doloribus, qui molestiae nobis voluptatum voluptatibus, at vel porro aspernatur eveniet!</span>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
};

export default Slider;