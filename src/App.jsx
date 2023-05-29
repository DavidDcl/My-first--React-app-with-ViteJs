import "./App.css"
import PokemonCard from "./components/Card"
// eslint-disable-next-line no-unused-vars
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
]

function App() {
  const pokemon = pokemonList[0]
  return (
    <>
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
    </>
  )
}

export default App
