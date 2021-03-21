import Image from "next/image";

//styles
import styles from "./about.module.scss";


const AboutDynamic = ({isInverse , title , img ,width , height , text}) => {

    return (
        <div className={ isInverse ? styles.aboutinverse : styles.about}>
            <h1> <div></div>{title}</h1>
            <div className={styles.aboutContainer}>
                <div className={styles.logo}>
                    <Image alt="alensao logo" src={img} width={width} height={height}></Image>
                </div>
                <div className={styles.description}>
                   {text}
                </div>
            </div>

        </div>
    )
}

export default AboutDynamic;