import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Meds = () => {
  const [meds, setMeds] = useState([])

  useEffect(() => {
    fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds')
    .then((res) => res.json())
    .then((response) => {
      setMeds(response)
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  if (!meds) {
    return <div>Medications are loading...</div>
  }

  return (
    <div>
      <h2>Medications list</h2>
      {meds.map((med) => (
        <div key={med.id}>
          <Link to={`/pets/${med.id}`}>{med.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Meds