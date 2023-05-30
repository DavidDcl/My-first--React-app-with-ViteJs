import "./App.css"
import PokemonCard from "./components/Card"
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
]
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const clickPrev = () => {
    setPokemonIndex(
      pokemonIndex === 0 ? pokemonList.length - 1 : pokemonIndex - 1
    )
  }
  const clickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const currentPokemon = pokemonList[pokemonIndex]
  const disablePrev = pokemonIndex !== 0
  const disableNext = pokemonIndex !== pokemonList.length - 1
  return (
    <>
      <PokemonCard pokemon={currentPokemon} />
      {disablePrev && <button onClick={clickPrev}>Previus</button>}
      {disableNext && <button onClick={clickNext}>Next</button>}
    </>
  )
}

export default App
