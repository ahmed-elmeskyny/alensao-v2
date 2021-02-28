//next
import Image from "next/image";
import { useRouter } from 'next/router';


//style 
import styles from "./emissionMain.module.scss";

//react-player
import React from "react";
import ReactPlayer from "react-player/youtube";

//react-icons
import {AiFillYoutube} from "react-icons/ai";
import {FaFacebookSquare} from "react-icons/fa";

//db
import{ klam }from "../../db/dbklam";
import { delBasePath } from "next/dist/next-server/lib/router/router"

const EmissionMain= () => {
    const router = useRouter();


    return (
        <div className={styles.emissionMainContainer}>
            <h1>K-LAM <span>2.0</span></h1>
            <div className={styles.klam}>
                <div className={styles.video}>
                    <ReactPlayer url="https://youtu.be/a7EKqob5VBU" controls={true} width="100%" height="100%" ></ReactPlayer>
                </div>
                <div className={styles.description}>
                    <Image alt="k-lam 2.0 logo" src="/klamlogo.png" width="170px" height="30px" ></Image>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos ullam optio ipsa eligendi exercitationem vitae distinctio vel quas dolores numquam aspernatur sequi alias cupiditate totam beatae, ut natus veniam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos ullam optio ipsa eligendi exercitationem vitae distinctio vel quas dolores numquam aspernatur sequi alias cupiditate totam beatae, ut natus veniam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A dignissimos ullam optio ipsa eligendi exercitationem vitae distinct
                    </p>
                    <div className={styles.social}>
                        <AiFillYoutube style={{color:"#FF0000",marginRight:"10px" ,fontSize:"40px",cursor:"pointer"}}></AiFillYoutube>
                        <FaFacebookSquare style={{color:"#097CEB" , cursor:"pointer"}}></FaFacebookSquare>
                    </div>
                </div>
            </div>
            <div className={styles.season} >
                <h2>2021</h2>
                <div className={styles.episodes}>
                    {
                        klam.map( episode => {
                            return (<div className={styles.episode} key={episode.id} onClick={() => router.push(`emission/${episode.guest}`)} >
                                <div className={styles.img} style={{backgroundImage: `url(${episode.thumbnail})`}}></div>
                                <p> {episode.episode } - {episode.guest}</p>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default EmissionMain;