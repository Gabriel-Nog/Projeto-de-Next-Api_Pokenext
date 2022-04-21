import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='keywords' content='Blusas, calçados, Bonés'></meta>
        <meta name='description' content='Find better look  for you!'></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Ínicio</h1>
      </div>
      <Image
        src={'/Images/city.jpg'}
        width={"400px"}
        height={"500px"}
        alt={"Cidade a noite"}
      />
    </>
  )
}
