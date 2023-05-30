const NavBar = ({ pokemonlist, setPokemonIndex }) => {
  return (
    <>
      {pokemonlist.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </>
  )
}

export default NavBar
