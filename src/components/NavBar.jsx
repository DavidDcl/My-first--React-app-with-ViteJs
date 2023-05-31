const NavBar = ({ pokemonlist, setPokemonIndex, currentPokemon }) => {
  const handleClick = (pokemon) => {
    if (pokemon.name === "pikachu") {
      alert("pika pikachu !!!")
    }
  }
  return (
    <>
      {pokemonlist.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => {
            handleClick(pokemon)
            setPokemonIndex(index)
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  )
}

export default NavBar
