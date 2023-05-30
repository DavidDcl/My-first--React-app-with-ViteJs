const NavBar = ({ clickNext, clickPrev, disablePrev, disableNext }) => {
  return (
    <>
      {disablePrev && <button onClick={clickPrev}>Previus</button>}
      {disableNext && <button onClick={clickNext}>Next</button>}
    </>
  )
}

export default NavBar
