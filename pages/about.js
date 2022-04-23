import Image from 'next/image'
import styles from '../styles/About.module.css'
import Head from "next/head";
export default function About() {
    return (
        <div className={styles.about}>
            <Head>
                <title>Sobre</title>
            </Head>
            <h1>Sobre</h1>
            <p>Lorem ypsum uhgsokvosd iiqoefkwkpgpw ehfiwehiowowoqgq ufhiwjkwqofoewo hqwifhew qifjweqf ijfeqnciewo jeqifwjfjweifiw sdgjsfbfd hwrgjwriqig hwgi hhfwywkh wfehhgiwqi wefhwqigi ewhufhuwq</p>
            <Image src={'/images/charizard.png'} width={'300'} height={'300'} alt={'Charizaed'} />

        </div>
    )
}