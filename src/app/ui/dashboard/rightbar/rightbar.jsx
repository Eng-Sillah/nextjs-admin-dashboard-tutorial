import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "./rightbar.module.css"
import Image from 'next/image';

function Rightbar() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>
                        🔥 Available Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of the  admin dashboard</h3>
                    <span className={styles.subTitle}>Take 4 minutes to learn</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni placeat exercitationem consequuntur</p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled /> Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                {/* <div className={styles.bgContainer}>
                    <img src="/astronaut.png" alt="" fill/>
                </div> */}
                <div className={styles.text}>
                    <span className={styles.notification}>
                        🔥 Available Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of the  admin dashboard</h3>
                    <span className={styles.subTitle}>Take 4 minutes to learn</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni placeat exercitationem</p>
                    <button className={styles.button}>
                        <MdReadMore /> Watch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar;