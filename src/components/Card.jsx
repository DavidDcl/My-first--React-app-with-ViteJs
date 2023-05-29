import PropTypes from "prop-types"
function PokemonCard({ name, imgSrc }) {
  return (
    <figure>
      <img src={imgSrc} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export default PokemonCard
