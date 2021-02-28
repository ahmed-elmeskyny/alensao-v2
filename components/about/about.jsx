import Image from "next/image";

//styles
import styles from "./about.module.scss";


const AboutDynamic = ({isInverse , title , img ,width , height}) => {

    return (
        <div className={ isInverse ? styles.aboutinverse : styles.about}>
            <h1> <div></div>{title}</h1>
            <div className={styles.aboutContainer}>
                <div className={styles.logo}>
                    <Image alt="alensao logo" src={img} width={width} height={height}></Image>
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem consectetur consequatur optio ipsam tempore, distinctio cumque facere exercitationem non saepe ratione quis, soluta, vitae assumenda ex maxime? Sequi, eos.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quidem veniam, culpa nostrum accusamus fugiat obcaecati beatae ullam at, consequatur nemo. Voluptatibus et quisquam dolor! Sit, rerum aliquid! Quo, sint!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt ratione autem voluptatum accusamus quasi facere, aliquid, illum vitae sint perspiciatis. Perferendis aut unde ducimus praesentium quas corrupti delectus cumque?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quidem veniam, culpa nostrum accusamus fugiat obcaecati beatae ullam at, consequatur nemo. Voluptatibus et quisquam dolor! Sit, rerum aliquid! Quo, sint!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt ratione autem voluptatum accusamus quasi facere, aliquid, illum vitae sint perspiciatis. Perferendis aut unde ducimus praesentium quas corrupti delectus cumque?
                </div>
            </div>

        </div>
    )
}

export default AboutDynamic;