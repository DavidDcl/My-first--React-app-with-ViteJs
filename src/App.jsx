import "./App.css"
import PokemonCard from "./components/Card"
import NavBar from "./components/NavBar"
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
    setPokemonIndex(pokemonIndex - 1)
  }
  const clickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  const currentPokemon = pokemonList[pokemonIndex]

  return (
    <>
      <PokemonCard pokemon={currentPokemon} />
      <NavBar
        clickPrev={clickPrev}
        clickNext={clickNext}
        disablePrev={pokemonIndex !== 0}
        disableNext={pokemonIndex !== pokemonList.length - 1}
      />
    </>
  )
}

export default App
