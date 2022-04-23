import styles from '../styles/Home.module.css'

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
      <h1>PokeDex!</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  )
}
