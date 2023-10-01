import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Card.module.css'
export default function Card({ pokemon }) {
    return (
        <div className={styles.card}>
            <Image
                src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemon.id}.gif`}
                width={'120px'}
                height={'120px'}
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 key={pokemon.id} className={styles.title}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}><a className={styles.btn}>+Detalhes</a></Link>
        </div>
    )
}