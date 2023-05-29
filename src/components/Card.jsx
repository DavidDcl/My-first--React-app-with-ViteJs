function PokemonCard() {
  const { name, imgSrc } = pokemonList[1]
  return name === "bulbasaur" ? (
    <figure>
      <img src={imgSrc} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  ) : (
    <p>???</p>
  )
}

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

export default PokemonCard
