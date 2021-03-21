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
                    <p>Etant des élèves ingénieurs, à l'Ecole Nationale des Sciences Appliquées d'Oujda, il est de notre devoir d'être instruits et conscients de les situations sociale et économique de la région, et du Royaume. C'est dans ce cadre que nous avons lancé une émission nommée "K-LAM 2.0". Son but étant d'inviter des personnalités de haut calibre, afin de dialoguer avec eux sur des points socio-économiques qui intéressent le développement de notre pays. 
                    </p>
                    <div className={styles.social}>
                        <a href="https://www.youtube.com/channel/UCbBDkfV17rgQDyyJz-SxDfQ" target="_blank"><AiFillYoutube style={{color:"#FF0000",marginRight:"10px" ,fontSize:"40px",cursor:"pointer"}}></AiFillYoutube></a>
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