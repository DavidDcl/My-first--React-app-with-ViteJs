const NavBar = ({ pokemonlist, setPokemonIndex }) => {
  const handleClick = (pokemon) => {
    if (pokemon.name === 'pikachu') {
      setTimeout(() => {
        alert('pika pikachu !!!')
      }, 1)
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
