import Image from "next/image"
import styles from "../styles/Loading.module.css"
export default function loadConfig() {
    return (
        <div className={styles.loading}>
            <div className={styles.pokeball}>
                <Image
                    src="/images/simple_pokeball.gif"
                    width={'800px'}
                    height={'600px'}
                    alt="Pokebola"
                />
            </div>
        </div >
    )
}