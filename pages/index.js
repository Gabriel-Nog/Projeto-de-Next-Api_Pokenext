import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Card from '../components/Card';
export async function getStaticProps() {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon/"

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //Add id on Pokemóns for Gotta catch all*
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });
  return {
    props: {
      pokemons: data.results,
    }
  }
}
export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next!</span></h1>
        <Image src={'/images/pokeball.png'} width={'50px'} height={'50px'} alt={'PokeBola'} />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
